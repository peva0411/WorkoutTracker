using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using Microsoft.Ajax.Utilities;
using MongoDB.Driver.Builders;
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
            var workouts =
                workoutTrackerContext.Workouts
                                     .FindAs<Workout>(
                    Query<Workout>.Where(w => w.Username == User.Identity.Name));
             
            return Ok(workouts.ToList());
        }

        // POST api/workouts
        public void Post(Workout workout)
        {
            workout.Username = User.Identity.Name;
            workoutTrackerContext.Workouts.Insert(workout);
        }


    }
}
