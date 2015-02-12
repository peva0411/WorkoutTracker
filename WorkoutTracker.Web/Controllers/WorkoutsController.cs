using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Principal;
using System.Web.Http;
using System.Web.Http.Results;
using Microsoft.Ajax.Utilities;
using MongoDB.Bson;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;
using WorkoutTracker.Data;
using WorkoutTracker.Data.Repositories;

namespace WorkoutTracker.Web.Controllers
{
    [Authorize]
    public class WorkoutsController : ApiController
    {
        
        private readonly IWorkoutRepository workoutRepository;

        public WorkoutsController(IWorkoutRepository workoutRepository)
        {
            this.workoutRepository = workoutRepository;
        }

        public IHttpActionResult Get()
        {
            var workouts = workoutRepository.GetUserWorkouts(User.Identity.Name);
             
            return Ok(workouts);
        }

        [Route("api/workouts/{id}")]
        public IHttpActionResult Get(string id)
        {
            var workout = workoutRepository.GetWorkoutById(id);

            if (workout == null)
                return NotFound();

            return Ok(workout);
        }

        // POST api/workouts
        public IHttpActionResult Post(Workout workout)
        {
            workout.Username = User.Identity.Name;
            workoutRepository.Save(workout);

            return Ok();
        }

        [Route("api/workouts/{workoutId}/exercises")]
        public IHttpActionResult PostExercise(string workoutId, Exercise exercise)
        {
            var workout = workoutRepository.GetWorkoutById(workoutId);
            
            if (workout == null) return NotFound();

            workout.Exercises.Add(exercise);

            workoutRepository.Save(workout);

            return Ok();

        }

        [Route("api/workouts/{id}/exercises")]
        public IHttpActionResult GetExercises(string id)
        {
            var workout = workoutRepository.GetWorkoutById(id);

            if (workout == null)
                return NotFound();

            return Ok(workout.Exercises);
        }


    }
}
