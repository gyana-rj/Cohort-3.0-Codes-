import express from "express";

const app = express();

app.get("/signup", (req, res) => {
    res.send("Hey");
});

app.get("/signin", (req, res) => {
});

app.get("/chat", (req, res) => {
});


function main(){
    console.log(`Listening on port 3001`)
    app.listen(3001);
}

main()