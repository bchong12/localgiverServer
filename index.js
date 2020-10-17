const express = require("express");
const session = require("express-session");
const massive = require("massive");
const cors = require("cors");
const keys = require("./keys");
const authCtrl = require("./controllers/authControllers");

const app = express();

app.use(express.json());
app.use(cors());

massive({
  connectionString: keys.connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((db) => {
  app.set("db", db);
  console.log("db is connected");
});

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: keys.sessionSecret,
  })
);

app.get("/", (req, res) => {
  res.send({
    hi: "bye",
  });
});

//auth routes
app.post("/auth/login", authCtrl.login);
app.post("/auth/register", authCtrl.register);
app.post("/auth/logout", authCtrl.logout);
app.post("/yo", (req, res) => {
  res.send({
    yo: "it worked",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server connected on ${PORT}`));
