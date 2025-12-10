import express from "express";
import cors from "cors";
import contactRoute from "./routes/contact.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoute);

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
