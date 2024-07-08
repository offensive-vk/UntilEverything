const users = []; // This should be replaced with a real database in a production application

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.createUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
};
