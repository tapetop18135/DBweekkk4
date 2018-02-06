"use strict";

var mainInteractive = () => {

    $("#btn_stu").click((event) => {
        event.preventDefault();
        btn_addStudent();
    });
    $("#btn_sub").click((event) => {
        btn_addCourse();
    });
    $("#btn_tran").click((event) => {
        btn_addTranscript();
    });

}


var btn_addStudent = (callback) => {
    console.log("btn_addStudents");
    $.ajax({
        type : "post",
        url : "/db/addStudent",
        data : $("#form_stu_f").serialize(),
        success : (data) => {
            callback()
        }
    });
}

var btn_addCourse = () => {
    console.log("btn_addCourse");
}

var btn_addTranscript = () => {
    console.log("btn_addTranscripts");
}


$(mainInteractive)

