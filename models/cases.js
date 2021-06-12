const mongoose = require('mongoose');

const CaseScehme = new mongoose.Schema({
    policeStation:String,
    firNo:String,
    nameOfInspector:String,
    dateOfArresting:String,
    dateOfChargeSheet:String,
    email: String,
    type: String,
    dateOfCallCCD: String,
    nameOfCourt: String

});
const Case = mongoose.model('cases', CaseScehme);

module.exports = Case;
