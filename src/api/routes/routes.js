'use strict';

module.exports = function (app) {
    const requests = require('../controller/requestController');
    const userHandlers = require('../controller/authController');

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
