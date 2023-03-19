const Prisma = require("../utils/prisma");
const { hashPassword, comparePassword } = require("../utils/hash");
const { createAccessToken, createRefreshToken, verifyToken } = require("../utils/token");


const createUser = async (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const plainPassword = req.body.password;
    const hashedPassword = await hashPassword(plainPassword);

    const user = await Prisma.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword
        }
    })
    const payload = { "email": user.email }
    const accessToken = createAccessToken(payload);
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

    res.cookie("_j1", accessToken, {
        withCredentials: true,
        secure: false,
        domain: "localhost"
    });

    res.status(200);
    res.json({ "message": "Successfully Created an Account" });



}

const authenticateUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const foundUser = await Prisma.user.findFirst({
        where: {
            email: email
        }
    });


    if (foundUser) {
        const hashedPassword = foundUser.password;
        const result = await comparePassword(password, hashedPassword);
        if (result) {
            const payload = { "email": foundUser.email}
            const resultedRefreshToken = await Prisma.refreshToken.findFirst({
                where: {
                    userId: foundUser.id
                }
            });
            const expiresAt = new Date(resultedRefreshToken.expiresAt)
            if (expiresAt < new Date()) {

                const refreshToken = createRefreshToken(payload);
                const storeRefreshToken = await Prisma.refreshToken.create({
                    data: {
                        token: refreshToken,
                        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                        user: {
                            connect: { id: foundUser.id }
                        }
                    }
                });

            }

            const accessToken = createAccessToken(payload);
            res.cookie("_j1", accessToken, {
                withCredentials: true,
                secure: false,
                domain: "localhost"
            });
            
            res.status(200);
            res.json({ "message": "Successfully Logged In!" });
        }
    }
}


module.exports = { createUser, authenticateUser }