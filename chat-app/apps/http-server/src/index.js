"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/signup", function (req, res) {
    res.send("Hey");
});
app.get("/signin", function (req, res) {
});
app.get("/chat", function (req, res) {
});
function main() {
    console.log("Listening on port 3001");
    app.listen(3001);
}
main();
