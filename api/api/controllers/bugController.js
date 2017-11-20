const mongoose  = require('mongoose');
const Bug       = mongoose.model('Bugs');

exports.list_all_bugs = (req, res) => {
    Bug.find({}, (err, bugs) => {
        if (err)
            res.send(err);
        res.json(bugs);
    });
};

exports.submit_a_bug = (req, res) => {
    const new_bug = new Bug (req.body);
    new_bug.save((err, bug) => {
        if (err)
            res.send(err);
        res.json(bug);
    });
};

exports.read_a_bug = (req, res) => {
    Bug.findById(req.params.bugId, (err, bug) => {
        if (err)
            res.send(err)
        res.json(bug);
    });
};

exports.change_bug_status = (req, res) => {
    Bug.findOneAndUpdate({_id: req.params.bugId}, req.body, {new: true}, 
        (err, bug) => {
            if (err)
                res.send(err);
            res.json(bug);
    });
};

exports.delete_a_bug = (req, res) => {
    Bug.remove({
        _id: req.params.bugId,
    }, (err, task) => {
        if (err)
            res.send(err);
        res.json({ message: 'Bug successfully deleted'});
    });
};