var app;
(function (app) {
    (function (layout) {
        var ShellController = (function () {
            function ShellController($state, authTokenService) {
                var _this = this;
                this.$state = $state;
                this.authTokenService = authTokenService;
                this.logout = function () {
                    _this.authTokenService.removeToken();
                    _this.$state.go('home');
                };
                this.isAuthenticated = function () {
                    var token = _this.authTokenService.getToken();
                    if (token) {
                        _this.user = token.userName;
                    } else {
                        _this.user = "";
                    }
                    return _this.authTokenService.isAuthenticated();
                };
                var vm = this;
            }
            ShellController.$inject = ['$state', 'app.services.AuthTokenService'];
            return ShellController;
        })();

        angular.module('app.layout').controller('app.layout.ShellController', ShellController);
    })(app.layout || (app.layout = {}));
    var layout = app.layout;
})(app || (app = {}));
//# sourceMappingURL=shell.controller.js.map
