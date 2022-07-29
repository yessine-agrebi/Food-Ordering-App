import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./db/connection.js";
import productRouter from "./routes/productRouter.js";

const app = express(); 

var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connection.on('error', console.error.bind(console, "Mongodb connection error:"));

app.get("/", (req, res) => {
    res.json({message: "Welcome to food ordering!"});
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, console.log(`app listening on port ${PORT}` ));

app.use("/api", productRouter);