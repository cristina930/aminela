require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');
require('jquery/dist/jquery.js');
require('bootstrap/dist/js/bootstrap.js');
require('angular');
require('angular-ui-bootstrap');
require('angular-ui-router');
require('./routerHelperProvider');
require('./home/home.router');
require('./home/home.ctrl');
require('./common/config.srv');
require('./login/login.router');
require('./login/login.fltr');

var app = require('./app');

angular.element(document).ready(function () {
    angular.bootstrap(document,[app.name])
});