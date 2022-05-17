import express from "express";
import { categoriesRoutes } from "./routes/categories.routes.ts";

const app = express();
app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log("server listening on port 3333"));
