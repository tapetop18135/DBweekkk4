"use strict";

var mainInteractive = () => {
    trascripts_table();
    $("#btn_tran").click((event) => {
        event.preventDefault();
        btn_addTranscript();
    });

    $("#student_table").click((event) => {
        event.preventDefault();
        if($("#student_table").attr("class") !== "active_menu"){
            $("#student_table").attr("class","active_menu");
            $("#course_table").attr("class","dont_active");
            $("#tran_table").attr("class","dont_active");  
        }
        student_table();
    });

    $("#course_table").click((event) => {
        event.preventDefault();
        if($("#course_table").attr("class") !== "active_menu"){
            $("#student_table").attr("class","dont_active");
            $("#course_table").attr("class","active_menu");
            $("#tran_table").attr("class","dont_active");
        }
        courses_table();
        // $(this).attr("class").val();
    });

    $("#tran_table").click((event) => {
        event.preventDefault();
        if($("#tran_table").attr("class") !== "active_menu"){
            $("#student_table").attr("class","dont_active");
            $("#course_table").attr("class","dont_active");
            $("#tran_table").attr("class","active_menu");
        }
        trascripts_table();
    });

}


var btn_addStudent = (callback) => {

}

var btn_addCourse = () => {
    console.log("btn_addCourse");
}

var btn_addTranscript = () => {
    console.log("btn_addTranscript");
    $.ajax({
        type : "post",
        url : "/db/addTranscript",
        data : $("#form_tran_f").serialize(),
        success : (data) => {
            console.log(data)
            // $("#alert").show(1000);
            if(data === "transcripts"){
                $(".message").text("Insert Transcript Success").css({
                    "color":"green",
                    "background" : "#CFF5C3",
                    "padding" : "10px", 
                    "opacity" : "0.7"
                });
                $("#alert").show(700).delay(700).fadeOut(700);    
            }else{
                $(".message").text("Eror Insert Transcript").css({
                    "color":"red",
                    "background" : "pink",
                    "padding" : "10px", 
                    "opacity" : "0.7"
                });
                $("#alert").show(700).delay(700).fadeOut(700); 
            }
            // if(err){
            //     console.log(data);
            // }else{
            //     console.log(data);    
            //     $("#stu_id").val("");
            // }
        }
    });
}

var student_table = () => {
    console.log("student_table");
    $.ajax({
        type:"post",
        url:"/showStudents",
        data : {call:"showStudents"},
        success : (data) => {
            var str = "<h2>Stuent Table</h2>"
            var string = showdata(str,data);
            
            console.log(string);
            $("#show_wheClick").hide().html(string).fadeIn(800);
        }
    });
}

var courses_table = () => {
    $.ajax({
        type:"post",
        url:"/showCourses",
        data : {call:"showCourses"},
        success : (data) => {
            var str = "<h2>Course Table</h2>"
            var string = showdata(str,data);
            $("#show_wheClick").hide().html(string).fadeIn(800);
            
        }
    });
}

var trascripts_table = () => {
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
                var str = "<h2>Trascript Table</h2>"
                var string = showdata(str,data[1]);

                $("#show_wheClick").hide().html(string).fadeIn(800);
            }
            // str = "test"+data.length
        }
    });
}


var showdata = (strhead,data) => {
    strhead += "<table><tr>"
    for(var k in data[0]){
        strhead += "<th>"+k+"</th>"
    }

    strhead += "</tr>"


    for(var i = 0 ; i < data.length ; i+= 1){
        strhead += "<tr>"
        for(var key in data[i]){
            strhead += "<td>"+data[i][key]+"</td>";
        }
        strhead += "</tr>";
    }
    strhead += "</table>"
    return strhead
}

$(mainInteractive)
