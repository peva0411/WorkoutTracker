using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WorkoutTracker.Data;

namespace WorkoutTracker.Web.Controllers
{
    public class HomeController : Controller
    {

        public WorkoutTrackerContext Context;

        public HomeController()
        {
            Context = new WorkoutTrackerContext();
        }

        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            Context.Database.GetStats();

            return Json(Context.Database.Server.BuildInfo, JsonRequestBehavior.AllowGet);
        }
    }
}
