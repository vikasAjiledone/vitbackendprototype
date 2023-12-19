import express from "express";
import connectDb from "./Database/ConnectDb.js";
import cors from "cors";
import PlanningRoute from "../vitbackend/Routes/PlanningRoutes.js";
import DesignRoute from "../vitbackend/Routes/DesignRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", PlanningRoute);
app.use("/api", DesignRoute);

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
