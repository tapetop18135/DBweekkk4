"use strict";
var mainShow = () => {  
    
    showStudents();
    showTrascripts();
    showCourses();

}

var showTrascripts = () => {
    $.ajax({
        type:"post",
        url:"/showAllJoin",
        data : {call:"showTrascripts"},
        success : (data) => {
            if(data[0]){
                console.log(data[1])
                return
            }else{     
                // console.log(data[1])
                var string = str(data[1]);

                $(".transcripts").html(string)
            }
            // str = "test"+data.length
        }
    });
}

var showCourses = () => {
    $.ajax({
        type:"post",
        url:"/showCourses",
        data : {call:"showCourses"},
        success : (data) => {
            var string = str(data);
            $(".Courses").html(string)
            
        }
    });
}


var showStudents = () => {
    $.ajax({
        type:"post",
        url:"/showStudents",
        data : {call:"showStudents"},
        success : (data) => {
            var string = str(data);
            $(".students").html(string)
        }
    });
}

var str = (data) => {
    var str = "";
    for(var i = 0 ; i < data.length ; i+= 1){
        for(var key in data[i]){
            str += data[i][key]+" ";
        }
        str += "<br>";
    }
    return str
}
// mainShow();
setInterval("mainShow()", 500);