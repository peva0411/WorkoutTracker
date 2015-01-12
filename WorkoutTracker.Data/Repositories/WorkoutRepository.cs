using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;

namespace WorkoutTracker.Data.Repositories
{
   public class WorkoutRepository:IWorkoutRepository
    {
       private readonly WorkoutTrackerContext _workoutTrackerContext;

       public WorkoutRepository(WorkoutTrackerContext workoutTrackerContext)
       {
           _workoutTrackerContext = workoutTrackerContext;
       }

       public IEnumerable<Workout> GetWorkouts()
       {
           return _workoutTrackerContext.Workouts.FindAllAs<Workout>().ToList();
       }

       public IEnumerable<Workout> GetUserWorkouts(string username)
       {
           return _workoutTrackerContext
                        .Workouts
                        .FindAs<Workout>(Query<Workout>.Where(w => w.Username == username));
       }

       public Workout GetWorkoutById(string id)
       {
           return _workoutTrackerContext.Workouts.FindOneByIdAs<Workout>(ObjectId.Parse(id));
       }

       public IEnumerable<Exercise> GetWorkoutExercises(string workoutId)
       {
           return _workoutTrackerContext.Workouts.AsQueryable<Workout>().Single(w => w.Id == workoutId).Exercises;
       }

       public void Save(Workout workout)
       {
           var info = _workoutTrackerContext.Workouts.Save(workout);
          // workout.Id = info.Response.AsString;
           //return workout;
       }
    }
}
