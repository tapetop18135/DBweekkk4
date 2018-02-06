

var kmutnbDB = function(name){
    var sqlite3 = require("sqlite3").verbose();
    var db = new sqlite3.Database(name);
    this.showAll = function(table,callback){
        db.serialize(function() {
            db.all("SELECT * FROM "+table, function(err, result) {
                if(err){
                    // callback(true,err);
                    console.log(err);
                    callback(true,err)
                    return;
                }
                callback(false,result)
                // callback(false,row);
            });
          });  
        //   db.close();
    }
    this.insert = (table,id_stu,id_sub,year,semester,gpa,comment,callback) => {
        // if(comment === undefined){comment = 'nocomment'}
        sql = 'INSERT INTO transcripts VALUES ("'+id_stu+'","'+id_sub+'","'+year+'","'+semester+'","'+gpa+'",'+comment+')'
        db.serialize(() => {
            db.run("PRAGMA foreign_keys = ON");
            db.run(sql,(err) => {
                if(err){
                    console.log(err);
                    return;
                }        
                callback(table);
            });
        });
    }

    this.insertStu = (table,id_stu,fname,lname,email,callback) => {
        // if(comment === undefined){comment = 'nocomment'}
        sql = 'INSERT INTO '+table+' VALUES ("'+id_stu+'","'+fname+'","'+lname+'","'+email+'")'
        db.serialize(() => {
            db.run("PRAGMA foreign_keys = ON");
            db.run(sql,(err) => {
                if(err){
                    console.log(err);
                    callback(true,err);
                    return;
                }        
                callback(false,table);
            });
        });
    }

    this.deleteAll = (table,callback) => {
        sql = 'delete from '+table;
        db.serialize(() => {
            db.run(sql);
            callback(table);
        });
    }
}
// var test = new kmutnbDB("../../public/database/kmutnbDB.sqlite");

// test.showAll("transcripts",(err,result)=>{
//     console.log(result);
// });

// test.insertStu("students","5801012610027","sadasdas","sdasdsad","asddsad",(err,data) => {
//     console.log(err)
//     if(err){
//         console.log(data);
//     }else{
//         console.log(data)
//     }
// })

// test.deleteAll("transcripts",(table_name) => {
//     test.showAll(table_name,(err,result)=>{
//         console.log(result);
//     });
// });

// test.insert("transcripts","5801012610032","010123102","2558","1",'B',null,(table_name) => {
//     if(table_name == undefined){
//         console.log("err insert")
//         return;
//     }
//     test.showAll(table_name,(err,result)=>{
//         console.log(result);
//     });
// });

module.exports = kmutnbDB; 