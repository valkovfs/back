const Request = require('../models/requestModel');

exports.listAllRequests = (req, res) => {
    Request.find({}, (err, value) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(value);
    });
};

exports.createNewRequest = (req, res) => {
    let  newRequest = new Request (req.body);
    newRequest.save((err, value) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(value);
    });
}

exports.updateRequest = (req, res) => {
    Request.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, value) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(value)
    })
}

exports.deleteRequest = async (req, res) => {
    await Request.deleteOne({ _id: req.params.id}, (err) => {
        if (err) {
         return res.status(404).send(err);
        }
        res.status(200).send({message: "Request successfully deleted."})
    })
}