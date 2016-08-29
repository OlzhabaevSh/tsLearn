using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult HelloMVVM()
        {
            return View();
        }

        public ActionResult ExampleController()
        {
            return View();
        }

        public ActionResult ExampleService()
        {
            return View();
        }
        
        public ActionResult ExampleComponent()
        {
            return View();
        }

        public ActionResult ExampleModule()
        {
            return View();
        }

        public ActionResult ExampleDirective()
        {
            return View();
        }


    }
}