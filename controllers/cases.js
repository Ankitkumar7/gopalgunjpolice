
const Cases = require('../models/cases')

exports.postLogin = (req, res, next) => {
    const document = req.body;
    var cases = new Cases(document)
    cases.save(function (err, book) {
        if (err) return res.status(503).send({ msg: 'Error saving charge sheet' });
        res.status(200).send({ msg: 'Charge Sheet Submitted' })
      });
};

exports.getChargeSheet = (req, res, next) => {
    const document = req.query.email;
    const type = req.query.type;
    Cases.find({email: document, type: type}, function(err,data) {
        res.status(200).send({ data:  data})
    })
};

exports.removeItem = (req, res, next) => {
    const document = req.query.id;
    Cases.findByIdAndRemove({_id: document}, function(err,data) {
        res.status(200).send({ msg: 'Successfully Removed'})
    })
};

 