import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function insertUser(username, password, firstName, lastName, email) {
    prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            email
        }
    });
}
insertUser('flipper', 'jkdbcjbdwh', 'gyana', 'ranjan', 'devgyana@gamil.com');
//# sourceMappingURL=index.js.map