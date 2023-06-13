import "dotenv/config";
import express from "express";
import cors from "cors";
import { figureRoutes } from "./routes/";

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.use(express.static("public"));

server.use((req, res, next) => {
  res.setHeader("Access-controll-Allow-Origin", "*");
  res.setHeader(
    "Access-controll-Allow-Headers",
    "Origin,X-Requested-With,Content,Accept,Content-Type,Authorization"
  );
  res.setHeader("Access-controll-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});

server.get("/api", (req, res) => {
  res.status(200).json({
    message: "Server is working !",
  });
});

//**Routes */
server.use("/api/figures", figureRoutes);
server.use("/images", express.static("images"));

server.listen(process.env.SERVER_PORT);

export default server;
