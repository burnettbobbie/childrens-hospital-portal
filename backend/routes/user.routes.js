const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const router = require('express').Router(); 

module.exports = function(app) {
  
router.get('/test/admin', authJwt.verifyToken, authJwt.isAdmin)

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};

