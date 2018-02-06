var admin = require("../controllers/controller_server_admin.js");

var router = function(app){
    app.get("/",admin.admin_index);

    // show Data from SQL

    app.post("/showStudents",admin.showStudents);
    app.post("/showCourses",admin.showCourses);
    app.post("/showTrascripts",admin.showTrascripts);

    // add Data to SQL 
    app.post("/db/addStudent",admin.addStudent);
    // app.post("/db/addCourse",admin.addCourse);
    // app.post("/db/addTranscript",admin.addTranscript);
}

module.exports = router;