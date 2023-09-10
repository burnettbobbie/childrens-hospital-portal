const { verifySignUp } = require("../middlewares");


const controller = require("../controllers/auth.controller");


module.exports = function(app) {

//allow CORS headers to perform cross origin requests
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
      "Access-Control-Allow-Methods",
       "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
};

