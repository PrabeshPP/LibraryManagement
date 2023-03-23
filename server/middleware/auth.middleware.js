const Prisma = require("../utils/prisma");
const { createAccessToken, createRefreshToken, verifyToken, verifyRefreshToken } = require("../utils/token");

const authMiddleware = async (req, res, next) => {
    const header = req.headers.authorization;
    const token = header.split(" ")[1]
    if (token) {
        const result = verifyToken({ "token": token })
        if (result != null) {
            const currentTime = Date.now()
            const expirationTime = result.exp * 1000;
            if (expirationTime - currentTime <= 60 * 1000 * 2) {
                const user = await Prisma.user.findFirst({
                    where: {
                        email: result.email
                    }
                })
                const refreshToken = await Prisma.refreshToken.findFirst({
                    where: {
                        userId: user.id
                    }
                });

                const payload = { "email": user.email }
                const expiresAt = new Date(refreshToken.expiresAt)

                if (expiresAt < new Date()) {
                    const deletedToken = await Prisma.refreshToken.delete({
                        where: {
                            token: refreshToken
                        }
                    })
                    const refreshToken = createRefreshToken(payload);
                    const storeRefreshToken = await Prisma.refreshToken.create({
                        data: {
                            token: refreshToken,
                            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                            user: {
                                connect: { id: user.id }
                            }
                        }
                    });

                    const accessToken = createAccessToken(payload);
                    req.user=accessToken;
                    res.cookie("_j1", accessToken, {
                        withCredentials: true,
                        secure: false,
                        domain: "localhost"
                    });

                    next();

                } else {
                    const decodedRefreshToken = verifyRefreshToken({ "token": refreshToken.token });
                    if (decodedRefreshToken != null) {
                        const accessToken = createAccessToken(payload);
                        req.toke=accessToken;
                        res.cookie("_j1", accessToken, {
                            withCredentials: true,
                            secure: false,
                            domain: "localhost"
                        });

                        next();
                    } else {
                        res.status(401);
                        res.json({ "message": "Not Authorized!" })
                    }
                }
            } else {
                req.token=token;
                next();
            }

        } else {
            res.status(401);
            res.json({ "message": "Not Authorized!" })
        }
    } else {
        //send that the we have to login before creating a book
        //
        res.status(401);
        res.json({ "message": "You have to login to create a book!" })
    }

}

module.exports = authMiddleware;