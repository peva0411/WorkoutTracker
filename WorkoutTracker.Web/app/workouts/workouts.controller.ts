module app.workouts {
   
    interface IWorkoutsScope {
        workouts: app.services.IWorkout[];
              
    }

    class WorkoutsController implements IWorkoutsScope {
        workouts: app.services.IWorkout[];
        
        static $inject = ['app.services.WorkoutsService'];

        constructor(private workoutsService:app.services.IWorkoutService) {
            var vm = this;

            vm.getWorkouts();
        }

        getWorkouts():void {
            this.workoutsService.getWorkouts()
                .then((response: app.services.IWorkout[]):void=> {
                    this.workouts = response;
                })
                .catch((error: any): void=> {
                    console.log("error getting workouts");
            });
        }
    }

    angular.module('app.workouts')
        .controller('app.workouts.WorkoutsController', WorkoutsController);

} 