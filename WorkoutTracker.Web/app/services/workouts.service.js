var app;
(function (app) {
    (function (services) {
        var WorkoutsService = (function () {
            function WorkoutsService($http) {
                this.$http = $http;
            }
            WorkoutsService.prototype.getWorkouts = function () {
                return this.$http.get('/api/Workouts/').then(function (response) {
                    return response.data;
                });
            };
            return WorkoutsService;
        })();

        factory.$inject = ['$http'];
        function factory($http) {
            return new WorkoutsService($http);
        }

        angular.module('app.services').factory('app.services.WorkoutsService', factory);
    })(app.services || (app.services = {}));
    var services = app.services;
})(app || (app = {}));
//# sourceMappingURL=workouts.service.js.map
