'use strict';

module.exports = function (app) {
    let requests = require('../controller/requestController');
    app.route('/api/requests')
        .get(requests.listAllRequests)
        .post(requests.createNewRequest);

    app.route('/api/requests/:id')
        .put(requests.updateRequest)
        .delete(requests.deleteRequest);
}