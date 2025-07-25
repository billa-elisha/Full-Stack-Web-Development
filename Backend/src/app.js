import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//these are middle weares that tells express the type of data to expect
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
a;

export default app;
