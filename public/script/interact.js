"use strict";

var mainInteractive = () => {

    // $("#btn_stu").click((event) => {
    //     btn_addStudent();
    // });
    // $("#btn_sub").click((event) => {
    //     btn_addCourse();
    // });
    $("#btn_tran").click((event) => {
        event.preventDefault();
        btn_addTranscript();
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
            // if(err){
            //     console.log(data);
            // }else{
            //     console.log(data);    
            //     $("#stu_id").val("");
            // }
        }
    });
}


$(mainInteractive)
