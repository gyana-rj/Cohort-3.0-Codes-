import { PrismaClient } from "../src/generated/client/index.js";

const client = new PrismaClient();

async function createDummyUser() {
  await client.user.create({
    data: {
      username: "flipperinmotion",
      password: "gufvug6de73",
      firstName: "Thomas",
      lastName: "Shelby",
      city: "Bermingham",
      todos : {
        create : {
            title : "Today's task",
            description : "Complete Prisma and ORMs",
            done : true
        }
      }
    },
  });
}

createDummyUser();
