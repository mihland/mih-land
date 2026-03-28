const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("."));
app.get("*", (req, res) => res.sendFile("index.html", { root: "." }));
app.listen(5000, "0.0.0.0", () => console.log("MIH Land site running on port 5000"));
