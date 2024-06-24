import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import rateLimit from "express-rate-limit"
import multer from "multer"
import cors from "cors"
import path from "path"
import { userRouter, postsRouter } from "./routes"

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(rateLimit({ windowMs: 1 * 60 * 1000, max: 20 }));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var filename = "";

const storage = multer.diskStorage({
  destination: function(req, file, callback) { 
    callback(null, path.join(__dirname + "/public/"));
  },
  filename: function(req, file, callback) {
    filename = Date.now() + file.originalname;
    callback(null, filename);
  }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No files were uploaded.');
  }
  res.status(200).json({ imageUrl: req.protocol + "://" + req.hostname + ":3000/" + filename});
});

app.use(express.static(path.join(__dirname, "public")));

app.use(userRouter);
app.use(postsRouter);

app.listen(3000, () => {
  console.log("Server running on: http://localhost:3000");
});
