const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var usuariosSchema = new Schema({
  name : String,
  ci: String,
  address: String,
  password: String,
  email : String,
  registerdate : Date,
});
var usuarios = mongoose.model("usuarios", homeSchema);
module.exports = usuarios;
