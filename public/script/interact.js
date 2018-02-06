"use strict";

var mainInteractive = () => {

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


$(mainInteractive)
