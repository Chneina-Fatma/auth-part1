const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reservationSchema = new schema({
name: String,
lastname:String,
service:String,
date:String,
tel:String,
});
const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;