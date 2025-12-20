import { PrismaClient } from "../src/generated/client/index.js";
import express from "express"
const app = express();
const client = new PrismaClient();
app.use(express.json());

app.get("/users", async (req, res) => {
    const users = await client.user.findMany();

    res.json({
        users
    })
})

app.get("/todos/:id", async(req, res) => {
    const id = req.params.id as unknown as number;

    const user = await client.user.findFirst({
        where : {
            id : Number(id)
        },
        select : {
            todos : true,
            username : true
        }
    })

    res.json({
        user
    })
})


app.listen(3000);

