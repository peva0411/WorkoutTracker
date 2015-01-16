using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver.Linq;
using WorkoutTracker.Data;

namespace WorkoutTracker.Web.App_Start
{
    public static class MongoConfig
    {
        public static void Seed()
        {
            var context = new WorkoutTrackerContext();
     
            if (context.Workouts
                .AsQueryable()
                .Any(w => w.Name != "testWorkout"))
            {
                var data = new List<Workout>()
                {
                    new Workout()
                    {
                        Name = "testWorkout",
                        Username = "phil@test.com",
                        Date = DateTime.Now,
                        Exercises = new List<Exercise>()
                        {
                            new Exercise()
                            {
                                Name = "DumbBell Bicep Curl",
                                Sets = new List<Set>() {new Set() {Reps = 10, Weight = 25}, new Set(){Reps = 10, Weight = 27.5}, new Set(){Reps = 10, Weight = 27.5}}
                            },
                            new Exercise()
                            {
                                Name = "Pull Down",
                                Sets = new List<Set>() {new Set() {Reps = 10, Weight = 85}, new Set(){Reps = 10, Weight = 100}, new Set(){Reps = 8, Weight = 100}}
                            },
                            new Exercise()
                            {
                                Name = "Row",
                                Sets = new List<Set>() {new Set() {Reps = 10, Weight = 52}, new Set(){Reps = 10, Weight = 52}, new Set(){Reps = 8, Weight = 100}}                                
                            }
                        }
                    },
                     new Workout()
                    {
                        Name = "testWorkout2",
                        Username = "phil@test.com",
                        Date = DateTime.Now.AddDays(-1),
                        Exercises = new List<Exercise>()
                        {
                            new Exercise()
                            {
                                Name = "DumbBell Bicep Curl",
                                Sets = new List<Set>() {new Set() {Reps = 10, Weight = 25}, new Set(){Reps = 10, Weight = 27.5}, new Set(){Reps = 10, Weight = 27.5}}
                            },
                            new Exercise()
                            {
                                Name = "Pull Down",
                                Sets = new List<Set>() {new Set() {Reps = 10, Weight = 85}, new Set(){Reps = 10, Weight = 100}, new Set(){Reps = 8, Weight = 100}}
                            },
                            new Exercise()
                            {
                                Name = "Row",
                                Sets = new List<Set>() {new Set() {Reps = 10, Weight = 52}, new Set(){Reps = 10, Weight = 52}, new Set(){Reps = 8, Weight = 100}}                                
                            }
                        }
                    }
                };

                context.Workouts.InsertBatch(data);

            }
        }
    }
}