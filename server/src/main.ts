import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import { cors } from "./middlewares"

const app = express();

app.use(bodyParser.json());
app.use(cors);

app.post('/save-content', (req: Request, res: Response) => {
  let content = req.body.content;
  console.log(req.body);
  console.log(content);
});

app.listen(3000, () => {
  console.log("Server running on: http://localhost:3000");
});
