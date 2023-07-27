const users = require("../utils/users");

function login(req, res) {
  const { password, email } = req.query;

  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (foundUser) {
    return res.status(204).json({ access: true });
  } else {
    return res.status(403).json({ access: false });
  }
}

module.exports = login;
