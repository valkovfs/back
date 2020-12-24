const Project = require('../models/projectsModel');

exports.listAllProjects = (req, res) => {
    Project.find({}, (err, value) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(value);
    });
};

exports.getProject = (req, res) => {
    Project.findOne({_id: req.params.id}, (err, value) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(value);
    })
}

exports.createNewProject = (req, res) => {
    let  newProject = new Project (req.body);
    newProject.save((err, value) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(value);
    });
}

exports.updateProject = (req, res) => {
    Project.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, value) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(value)
    })
}

exports.deleteProject = async (req, res) => {
    await Project.deleteOne({ _id: req.params.id}, (err) => {
        if (err) {
            return res.status(404).send(err);
        }
        res.status(200).send({message: "Request successfully deleted."})
    })
}