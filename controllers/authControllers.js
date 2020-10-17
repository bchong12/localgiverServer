const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;

    const result = await db.check_user({ username });
    const existingUser = result[0];

    if (!existingUser) {
      return res.status(400).send("User does not exist");
    }

    const authenticated = await bcrypt.compareSync(
      password,
      existingUser.password
    );

    if (!authenticated) {
      return res.status(400).send("Username and password do not match");
    }

    delete existingUser.password;

    req.session.user = existingUser;

    res.status(200).send(req.session.user);
  },

  register: async (req, res) => {
    const db = req.app.get("db");
    const { firstName, lastName, username, password } = req.body;

    const result = await db.check_user({ username });

    if (result[0]) {
      return res.status(400).send("User already exists");
    }

    let salt = bcrypt.genSaltSync(10),
      hash = bcrypt.hashSync(password, salt);

    const newUser = await db.register_user({
      firstName,
      lastName,
      username,
      password: hash,
    });

    req.session.user = newUser[0];
    res.status(201).send(req.session.user);
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
};
