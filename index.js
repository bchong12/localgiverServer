const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    hi: "bye",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
