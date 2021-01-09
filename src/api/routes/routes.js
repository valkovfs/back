'use strict';

module.exports = function (app) {
    const projects = require('../controller/projectController')
    const requests = require('../controller/requestController');
    const userHandlers = require('../controller/authController');
    const files = require('../controller/fileController')

    app.route('/api/projects')
        .get(projects.listAllProjects)
        .post(projects.createNewProject);

    app.route('/api/upload').post(files.files)

    app.route('/api/projects/:id')
        .get(projects.getProject)
        .put(userHandlers.loginRequired, projects.updateProject)
        .delete(projects.deleteProject);


    app.route('/api/requests')
        .get(requests.listAllRequests)
        .post(requests.createNewRequest);

    app.route('/api/request/:id')
        .put(userHandlers.loginRequired, requests.updateRequest)
        .delete(userHandlers.loginRequired, requests.deleteRequest);

    app.route('/auth/register')
        .post(userHandlers.register);

    app.route('/auth/sign_in')
        .post(userHandlers.signIn);
}
