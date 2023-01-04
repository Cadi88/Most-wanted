import express from "express";
import bodyParser from "body-parser";

import menuRoutes from "./routes/menu-routes";

const app = express();
const port = 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
app.use(bodyParser.json());
app.use("/api/menu", menuRoutes);

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
