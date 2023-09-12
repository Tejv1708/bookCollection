import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
// import Book from "./Model/bookModel.js";
import booksRouter from "./routes/booksRoutes.js";
import cors from "cors";
const app = express();
//Optins 1  Allow All origins with default of cors (*);

// app.use(cors);

// Option 2 : Allow Customer Origins

app.use(
  cors({
    origin: "https://bookcollections.onrender.com/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome to MERN Stack Tutorial ");
});

app.use("/books", booksRouter);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");

    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
