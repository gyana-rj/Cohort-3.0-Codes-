import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function insertUser(username, password, firstName, lastName, email) {
    await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            email,
        },
    });
}
async function getTodos(userId) {
    const response = await prisma.user.findMany({
        where: {
            id: userId
        }
    });
    console.log(response);
}
async function getTodosAndUsersDetails(userId) {
    await prisma.todo.create({
        data: {
            title: "Learn prisma",
            description: "Learn prisma with typescript",
            userId: 1
        }
    });
    const response = await prisma.user.findMany({
        where: {
            id: userId
        }, select: {
            id: true,
            todos: true
        }
    });
    console.log(response);
}
async function main() {
    await insertUser('flipper4', 'jkdbcjbdwh', 'gyana', 'ranjan', 'devflipper4@gamil.com');
    getTodos(1);
    getTodosAndUsersDetails(1);
}
main().catch((e) => {
    console.error(e);
    process.exit(1);
});
//# sourceMappingURL=index.js.map