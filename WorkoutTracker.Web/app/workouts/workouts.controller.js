var app;
(function (app) {
    (function (workouts) {
        var WorkoutsController = (function () {
            function WorkoutsController(workoutsService) {
                this.workoutsService = workoutsService;
                var vm = this;

                vm.getWorkouts();
            }
            WorkoutsController.prototype.getWorkouts = function () {
                var _this = this;
                this.workoutsService.getWorkouts().then(function (response) {
                    _this.workouts = response;
                }).catch(function (error) {
                    console.log("error getting workouts");
                });
            };
            WorkoutsController.$inject = ['app.services.WorkoutsService'];
            return WorkoutsController;
        })();

        angular.module('app.workouts').controller('app.workouts.WorkoutsController', WorkoutsController);
    })(app.workouts || (app.workouts = {}));
    var workouts = app.workouts;
})(app || (app = {}));
//# sourceMappingURL=workouts.controller.js.map
