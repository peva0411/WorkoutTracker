using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WorkoutTracker.Data
{ 
    public class Workout
    {
        public Workout()
        {
            Exercises = new List<Exercise>();
        }

        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

       
        public string Username { get; set; }

        [BsonDateTimeOptions(Kind=DateTimeKind.Local)]
        public DateTime Date { get; set; }

        public List<Exercise> Exercises { get; set; } 

    }

    public class Exercise
    {
        public Exercise()
        {
            Sets = new List<Set>();
        }

        public string Name { get; set; }

        public List<Set> Sets { get; set; }
    }

    public class Set
    {
        public int Reps { get; set; }
        public int Weight { get; set; }
    }
}
