 module app.services {
     
     export interface IWorkoutService {
         getWorkouts():ng.IPromise<IWorkout[]>;
     }

     export interface IWorkout {
         id: string;
         name: string;
         username: string;
         date: Date;
     }

     class WorkoutsService implements  IWorkoutService {

         constructor(private $http: ng.IHttpService) {}

         getWorkouts(): ng.IPromise<IWorkout[]> {
             return this.$http.get('/api/Workouts/')
                 .then((response: ng.IHttpPromiseCallbackArg<IWorkout[]>): IWorkout[]=> {
                    return response.data;
             });
         }
     }

   
     factory.$inject = ['$http'];
     function factory($http:ng.IHttpService) {
         return new WorkoutsService($http);
     }

     angular.module('app.services')
         .factory('app.services.WorkoutsService', factory);

 }