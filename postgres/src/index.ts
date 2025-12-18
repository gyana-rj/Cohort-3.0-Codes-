import { Client } from "pg";
import express from "express"
const app = express();
app.use(express.json());

const pgClient = new Client({
    user: "neondb_owner",
    password : "npg_kvq7NLacR1GE",
    port: 5432,
    host: "ep-flat-salad-adkb96js-pooler.c-2.us-east-1.aws.neon.tech",
    database: "neondb",
    ssl : true
})

app.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    try {
        const insertQuery = `INSERT INTO users (username, password, email) VALUES($1, $2, $3);`
        const response = await pgClient.query(insertQuery, [username, password, email]);
        
        res.json({
            message : "You have signed up"
        })
    }catch(e){
        console.log(`error details ${e}`);
        res.status(403).json({
            message : "Error while signing up"
        })
    }
})

async function main(){
    await pgClient.connect();
    console.log(`Postgres DB connected`);
}

main();

app.listen(3000);


