const User = require("../models/User");

module.exports = app => {
  app.get("/user/current_user", (req, res) => {
    if (req.user) {
      const { _id } = req.user;
      console.log("request for user, sending:", req.user);
      User.findById({ _id })
        .populate("favorites")
        .then(user => {
          res.send(user);
        });
    } else {
      res.send(req.user);
    }
  });

  app.get("/user/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
