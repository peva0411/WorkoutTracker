var app;
(function (app) {
    (function (workouts) {
        var AddWorkoutController = (function () {
            function AddWorkoutController(workoutService, loggerService) {
                this.workoutService = workoutService;
                this.loggerService = loggerService;
                var vm = this;
                this.workout = {
                    exercises: []
                };
            }
            AddWorkoutController.prototype.create = function () {
                var _this = this;
                this.workoutService.createWorkout(this.workout).then(function (response) {
                    _this.loggerService.success("Successfuly added the workout");
                }).catch(function (errorRespose) {
                    _this.loggerService.error("Could not create workout");
                });
            };

            AddWorkoutController.prototype.addExercise = function () {
                this.workout.exercises.push({
                    name: '',
                    sets: []
                });
            };

            AddWorkoutController.prototype.addSet = function (exercise) {
                angular.forEach(this.workout.exercises, function (ex) {
                    if (ex['$$hashKey'] === exercise.$$hashKey) {
                        ex.sets.push({});
                    }
                });
            };
            AddWorkoutController.$inject = ['app.services.WorkoutsService', 'app.blocks.logger.LoggerService'];
            return AddWorkoutController;
        })();

        angular.module('app.workouts').controller('app.workouts.AddWorkoutController', AddWorkoutController);
    })(app.workouts || (app.workouts = {}));
    var workouts = app.workouts;
})(app || (app = {}));
//# sourceMappingURL=addWorkout.controller.js.map
