using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkoutTracker.Data.Repositories
{
    public interface IWorkoutRepository
    {
        IEnumerable<Workout> GetWorkouts();
        IEnumerable<Workout> GetUserWorkouts(string username); 
        Workout GetWorkoutById(string id);
        IEnumerable<Exercise> GetWorkoutExercises(string workoutId);

        void Save(Workout workout);

    }
}
