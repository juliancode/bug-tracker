module.exports = (app) => {
    var bug = require('../controllers/bugController');

    // routes
    app.route('/bugs')
        .get(bug.list_all_bugs)
        .post(bug.submit_a_bug);

    app.route('/bugs/:bugId')
        .get(bug.read_a_bug)
        .put(bug.change_bug_status)
        .delete(bug.delete_a_bug);
};