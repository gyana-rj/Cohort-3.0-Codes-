import { Client } from "pg";
import express from "express";
const app = express();
app.use(express.json());

const pgClient = new Client({
    user : "neondb_owner",
    password : "npg_kvq7NLacR1GE",
    port : 5432,
    host: "ep-flat-salad-adkb96js-pooler.c-2.us-east-1.aws.neon.tech",
    database : "neondb",
    ssl : true
})

async function main() {
    await pgClient.connect();
    console.log(`Postgres DB connected`);
}
main();

app.post("/signup", async function(req, res){
    const { username, password, email, city, country, street, pincode } = req.body;

    try{
        const userQuery = `INSERT INTO users (username, password, email) VALUES($1, $2, $3) RETURNING id;`
        const addressQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES($1, $2, $3, $4, $5);`
        
        // This is what a transaction looks like
        await pgClient.query("BEGIN;")
        const userresponse = await pgClient.query(userQuery, [username, password, email]);
        //You can test this to check that without transaction it will create the user partially but not the address
        //await new Promise(x => setTimeout(x, 100 * 1000)); //stops the control on this line for 100s
        const userId = userresponse.rows[0].id;
        const addresseresponse = await pgClient.query(addressQuery, [city, country, street, pincode, userId]);
        await pgClient.query("COMMIT;")

        res.json({
            message : "Signed up successfully"
        })

    }catch(e){
        console.log(e);
        res.status(403).json({
            message : "Something went wrong"
        })
    }
})

app.get("/metadata", async(req, res) => {
    const id = req.query.id;

    const query1 = `SELECT id,username,email FROM users WHERE id=$1`
    const response1 = await pgClient.query(query1, [id]);

    const query2 = `SELECT * FROM addresses WHERE user_id=$1`
    const response2 = await pgClient.query(query2, [id]);

    res.json({
        user: response1.rows[0],
        address : response2.rows
    })
})

app.get("/better-metadata", async(req, res) => {
    const id = req.query.id;

    const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
        FROM users JOIN addresses ON users.id = addresses.user_id
        WHERE users.id = $1;`

    const response = await pgClient.query(query, [id]);

    res.json({
        response : response.rows
    })
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});