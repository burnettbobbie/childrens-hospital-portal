const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.patient = require("./Patient");
db.notice = require("./Notice");
db.fact = require("./Fact");


db.ROLES = ["user", "admin"];

module.exports = db;
