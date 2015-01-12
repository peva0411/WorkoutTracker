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
        private readonly IIdentity _userIdentity;

        private readonly IWorkoutRepository _workoutRepository;

        public WorkoutsController()
        {
            _workoutRepository =  new WorkoutRepository(new WorkoutTrackerContext());
            _userIdentity = User.Identity;
        }

        public IHttpActionResult Get()
        {
            var workouts = _workoutRepository.GetUserWorkouts(_userIdentity.Name);
             
            return Ok(workouts);
        }

        [Route("api/workouts/{id}")]
        public IHttpActionResult Get(string id)
        {
            var workout = _workoutRepository.GetWorkoutById(id);

            if (workout == null)
                return NotFound();

            return Ok(workout);
        }

        // POST api/workouts
        public void Post(Workout workout)
        {
            workout.Username = User.Identity.Name;
            _workoutRepository.Save(workout);
        }

        [Route("api/workouts/{id}/exercises")]
        public IHttpActionResult PostExercise(string workoutId, Exercise exercise)
        {
            var workout = _workoutRepository.GetWorkoutById(workoutId);
            
            if (workout == null) return NotFound();

            workout.Exercises.Add(exercise);

            _workoutRepository.Save(workout);

            return Ok();

        }

        [Route("api/workouts/{id}/exercises")]
        public IHttpActionResult GetExercises(string id)
        {
            var workout = _workoutRepository.GetWorkoutById(id);

            if (workout == null)
                return NotFound();

            return Ok(workout.Exercises);
        }


    }
}
