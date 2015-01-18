var app;
(function (app) {
    (function (home) {
        var HomeController = (function () {
            function HomeController() {
                var vm = this;
            }
            return HomeController;
        })();

        angular.module('app.home').controller('app.home.HomeController', HomeController);
    })(app.home || (app.home = {}));
    var home = app.home;
})(app || (app = {}));
//# sourceMappingURL=home.controller.js.map
