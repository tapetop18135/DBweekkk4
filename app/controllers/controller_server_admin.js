// var sqlite  = require("sqlite3").verbose();
// const db = new sqlite.Database('./public/database/kmutnbDB.sqlite',sqlite.OPEN_READWRITE,(err) => {if(err)console.log(err)});
var kmutnbDB = require("../models/kmutnbDB.js");
const db = new kmutnbDB("./public/database/kmutnbDB.sqlite");

var controllerAdmin = function(){
    this.admin_index = (req,res) => {
        var students = null;
        var subjects = null;
        var transcriptions = null;

        res.render("./admin/index_admin.jade",{title:"Admin nuttakit"});
    }

    this.showTrascripts = (req,res) => {
        if(req.body.call !== "showTrascripts" ) return "Err Dont call";
        db.showAll("transcripts",(err,result) => {
            if(err) return "Err";
            res.send(result);
        })
    }

    this.showAllJoin = (req,res) => {
        var sql = "select students.stu_id , students.fname , students.lname , subjects.sub_id , subjects.sub_name , transcripts.year ,"+
        " transcripts.semester , transcripts.gpa from ((transcripts INNER JOIN students ON transcripts.stu_id = students.stu_id) "+
        "INNER JOIN subjects ON transcripts.sub_id = subjects.sub_id);";

        db.cmdSQL(sql,(err,result) => {
            if(err){
                res.send([err,result]);
                return ;
            }else{
                res.send([err,result]);
            }
        });

    }

    this.showCourses = (req,res) => {
        if(req.body.call !== "showCourses" ) return "Err Dont call";
        db.showAll("subjects",(err,result) => {
            if(err) return "Err";
            res.send(result);
        })
    }

    this.showStudents = (req,res) => {
        if(req.body.call !== "showStudents" ) return "Err Dont call";
        db.showAll("students",(err,result) => {
            if(err) return "Err";
            res.send(result);
        })
    }
    this.addTranscript = (req,res) => {
        var obj = req.body;
        var stu_id = obj.stu_id_tran
        var sub_id = obj.sub_id_tran
        var year = obj.year
        var semester = obj.semester
        var gpa = obj.gpa
        db.insert("transcripts",stu_id,sub_id,year,semester,gpa,'null',(err,table_name) => {
            if(table_name == undefined){
                console.log("err insert")
                return;
            }
            if(err){
                res.send(table_name)
                console.log(table_name);
            }else{
                res.send(table_name)
                db.showAll(table_name,(err,result)=>{
                    console.log(result);
                });
            }
        });
    }
    this.addStudent = (req,res) => {
        
        db.insertStu("students",req.body.stu_id,req.body.fname,req.body.lname,req.body.email,(err,data) => { 
            console.log(data);
        });
    }

}
var errPage = (res,err_msg) =>{
    console.log(err_msg)
    res.render("./admin/err_page.jade",{title:"Err nuttakit",data:err_msg});
}

module.exports = new controllerAdmin();
