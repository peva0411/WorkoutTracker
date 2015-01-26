 module app.services {
     
     export interface IWorkoutService {
         getWorkouts(): ng.IPromise<IWorkout[]>;
         createWorkout(workout: IWorkout) : ng.IPromise<any>;
     }

     export interface IExercise {
         name: string;
         sets: ISet[];
     }

     export interface ISet {
         reps: number;
         weight: number;    
     }

     export interface IWorkout {
         id: string;
         name: string;
         username: string;
         date: Date;
         exercises: IExercise[];
     }

     class WorkoutsService implements  IWorkoutService {

         constructor(private $http: ng.IHttpService) {}

         getWorkouts(): ng.IPromise<IWorkout[]> {
             return this.$http.get('/api/Workouts/')
                 .then((response: ng.IHttpPromiseCallbackArg<IWorkout[]>): IWorkout[]=> {
                    return response.data;
             });
         }

         createWorkout(workout: IWorkout) :ng.IPromise<any> {
             return this.$http.post('/api/Workouts/', workout);
         }

     }

   
     factory.$inject = ['$http'];
     function factory($http:ng.IHttpService) {
         return new WorkoutsService($http);
     }

     angular.module('app.services')
         .factory('app.services.WorkoutsService', factory);

 }