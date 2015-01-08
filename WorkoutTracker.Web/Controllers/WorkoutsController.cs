using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using Microsoft.Ajax.Utilities;
using WorkoutTracker.Data;

namespace WorkoutTracker.Web.Controllers
{
    [Authorize]
    public class WorkoutsController : ApiController
    {
        private readonly WorkoutTrackerContext workoutTrackerContext;

        public WorkoutsController()
        {
            workoutTrackerContext = new WorkoutTrackerContext();
        }

        public IHttpActionResult Get()
        {
            var workouts = workoutTrackerContext.Workouts.FindAllAs<Workout>();

            return Ok(workouts);
        }

        // POST api/workouts
        public void Post(Workout workout)
        {
            workout.Username = User.Identity.Name;
            workoutTrackerContext.Workouts.Insert(workout);
        }


    }
}
