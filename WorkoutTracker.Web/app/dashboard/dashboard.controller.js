var app;
(function (app) {
    (function (dashboard) {
        var DashboardController = (function () {
            function DashboardController() {
                var vm = this;
            }
            return DashboardController;
        })();

        angular.module('app.dashboard').controller('app.dashboard.DashboardController', DashboardController);
    })(app.dashboard || (app.dashboard = {}));
    var dashboard = app.dashboard;
})(app || (app = {}));
//# sourceMappingURL=dashboard.controller.js.map
