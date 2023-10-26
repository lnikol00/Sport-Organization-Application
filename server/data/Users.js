import bcrypt from "bcryptjs"

const users = [
    {
        name: "Admin",
        email: "admin@example.com",
        password: bcrypt.hashSync("Laganica12", 10),
        isAdmin: true
    },
    {
        name: "Luka",
        email: "nikolac007@gmail.com",
        password: bcrypt.hashSync("Laganica12!", 10),
    },
]

export default users