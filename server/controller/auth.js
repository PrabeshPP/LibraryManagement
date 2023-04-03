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

    res.cookie("_j1", accessToken, {
        maxAge:1000*10*24*60*60,
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
            const payload = { "email": foundUser.email }

                const accessToken = createAccessToken(payload);
                res.cookie("_j1", accessToken, {
                    withCredentials: true,
                    secure: false,
                    domain: "localhost",
                    maxAge:1000*10*24*60*60,
                });

                res.status(200);
                res.json({ "message": "Successfully Logged In!" });
        }
    }else{
        res.status(401);
        res.json({"message":"Not Authorized!"})
    }
}

// const logoutUser = async (req, res) => {
//     const header = req.headers.authorization;
//     const token = header.split(" ")[1]
//     const result = verifyToken({ "token": token })
//     const user = await Prisma.user.findFirst({
//         where: {
//             email: result.email
//         }
//     });
//     if (user) {
//         const deletedToken = await Prisma.refreshToken.delete({
//             where: {
//                 userId: user.id
//             }
//         });
//         res.status(200);
//         res.json({ "message": "Successfully Logged Out!" })
//     } else {
//         res.status(401);
//         res.json({ "message": "User not Found!" })
//     }
// }


module.exports = { createUser, authenticateUser}