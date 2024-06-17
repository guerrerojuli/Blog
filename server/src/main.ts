import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  // home 
  res.send("Home");
});

app.get("post/:id", (req: Request, res: Response) => {
  // get post by id
});

app.post("/login", (req: Request, res: Response) => {
 // login 
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
