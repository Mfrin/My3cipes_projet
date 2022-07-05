module.exports = function(app) {
  const { authJwt } = require("../middleware");
  const controller = require("../controllers/user.controller");

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/user/all", controller.allAccess);

  app.get(
    "/api/user",
    [authJwt.verifyToken],
    controller.userBoard
  );
};

/*
module.exports = app => {
  const users = require("../controllers/user.controller.js");
  var router = require("express").Router();

  const { authJwt } = require("../middleware");
  const controller = require("../controllers/user.controller");

  // Create a new user
  router.post("/", users.create);

  // Retrieve all users
  router.get("/", users.findAll);

  // Retrieve a single user with id
  router.get("/:id", users.findOne);

  // Update a user with id
  router.put("/:id", users.update);

  // Delete a user with id
  router.delete("/:id", users.delete);

  // Delete all users
  router.delete("/", users.deleteAll);

  app.use('/api/users', router);
};
*/