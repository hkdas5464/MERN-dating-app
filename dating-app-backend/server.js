import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";

const connection_url =
  "mongodb+srv://admin:12345@cluster0.3vwdw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(Cors());
//DB Config
mongoose.connect(
  connection_url,
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);



//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));
app.post("/dating/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get("/dating/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
