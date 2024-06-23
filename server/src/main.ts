import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import rateLimit from "express-rate-limit"
import { cors } from "./middlewares"
import { userRouter, postsRouter } from "./routes"

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(rateLimit({ windowMs: 1 * 60 * 1000, max: 20 }));
app.use(cors);

app.use(userRouter);
app.use(postsRouter);

app.listen(3000, () => {
  console.log("Server running on: http://localhost:3000");
});
