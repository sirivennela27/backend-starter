import express from "express";
import { indexrouter } from "./routers/index.router.js";

const app = express();
app.use(express.json());
app.use("/", indexrouter);

export { app };
