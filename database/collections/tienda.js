const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var tiendaSchema = new Schema({
  name : String,
  owner: String,
  address: String,
  type : String,
  phone : Number,
  logo : String,
  registerdate : Date,
  photo : String
});
var tienda = mongoose.model("user", homeSchema);
module.exports = tienda;
