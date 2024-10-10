import http from "http";
import "dotenv/config";
import { app } from "./app.js";
import { connectDB } from "./db/db.connect.js";

const port = process.env.PORT;
const server = http.createServer(app);

connectDB().then(() => {
  server.listen(port, () => {
    console.log(`port is running on the ${port}`);
  });
});
