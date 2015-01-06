using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using MongoDB.Driver;

namespace WorkoutTracker.Data
{
    public class WorkoutTrackerContext
    {
        public MongoDatabase Database;

        public WorkoutTrackerContext()
        {
            var connectionString = ConfigurationManager.ConnectionStrings["WorkoutTrackerConnection"].ConnectionString;
            var client = new MongoClient(connectionString);

            var server = client.GetServer();
            Database = server.GetDatabase(ConfigurationManager.AppSettings["MongoDBName"]);
        }

    }
}
