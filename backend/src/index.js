import "dotenv/config";
import routerProduct from "./routes/product.js";
import routerCategory from "./routes/category.js";
import routerPost from "./routes/post.js";
import path from "path";
import express from "express";
import errorHandler from "./helpers/errorHandler.js";
import bodyParser from "body-parser";
import cors from 'cors'

const app = express();
const { PORT: port } = process.env;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// cors
app.use(cors());

app.use("/static", express.static(path.join(process.cwd(), "/src/public")));

app.use("/api/products", routerProduct);
app.use("/api/categories", routerCategory);
app.use("/api/posts", routerPost);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
