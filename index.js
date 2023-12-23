import express from "express";
import connectDb from "./Database/ConnectDb.js";
import cors from "cors";
import PlanningRoute from "./Routes/PlanningRoutes.js";
import DesignRoute from "./Routes/DesignRoute.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import AuthRoute from "./Routes/AuthRoute.js";

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", PlanningRoute);
app.use("/api", DesignRoute);
app.use("/api", AuthRoute);

connectDb()
  .then((res) => {
    console.log("connected to database successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const port = 3000;
app.listen(port, (req, res) => {
  console.log(`server is listening to port ${port}`);
});
