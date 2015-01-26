module app.workouts {
    
    interface IAddWorkoutScope {
        workout: app.services.IWorkout;

        create(): void;   
        addExercise(): void;
        addSet(exercise: any):void;
    }

    class AddWorkoutController implements IAddWorkoutScope {

        static $inject = ['app.services.WorkoutsService', 'app.blocks.logger.LoggerService'];

        workout: app.services.IWorkout;

        constructor(private workoutService: app.services.IWorkoutService,
            private loggerService: app.blocks.logger.ILoggerService) {
            var vm = this;
            this.workout = <app.services.IWorkout>{
                exercises: []
        };
        }

        create(): void {
            this.workoutService.createWorkout(this.workout)
                .then((response: ng.IHttpPromiseCallbackArg<any>): void=> {
                    this.loggerService.success("Successfuly added the workout");
                }).catch((errorRespose: ng.IHttpPromiseCallbackArg<any>): void=> {
                     this.loggerService.error("Could not create workout");
            });
        }


        addExercise(): void {
            this.workout.exercises.push(<app.services.IExercise > {
                name: '',
                sets: []
            });
        }

        addSet(exercise: any): void {

            angular.forEach(this.workout.exercises, ex => {
                if (ex['$$hashKey'] === exercise.$$hashKey) {
                    ex.sets.push(<app.services.ISet>{});
                }
            });

        }


    }

    angular.module('app.workouts')
        .controller('app.workouts.AddWorkoutController', AddWorkoutController);

} 