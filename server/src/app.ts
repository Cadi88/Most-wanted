import express from "express";
import bodyParser from "body-parser"

import menuRoutes from './routes/menu-routes'

const app = express();
const port = 5000;

app.use('/api/menu', menuRoutes);

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
