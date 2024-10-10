import express from "express";
import { userrouter } from "./user.router.js";
import { authrouter } from "./auth.router.js";

const indexrouter = express.Router();
indexrouter.use("/api/v1/user", userrouter);
indexrouter.use("/api/v1/auth", authrouter);

export { indexrouter };
