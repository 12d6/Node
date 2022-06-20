const express=require('express')
const mysql=require('mysql')
var bodyparser=require('body-parser');
const cors=require('cors')
const path = require('path');
const multer=require('multer');

// const { default: ImageUpload } = require('../frontend/src/ImageUpload');
const connection = require('./config/database');




 
const db=mysql.createPool({
    connectionLimit:10,
    host:"localhost",
    user:"root",
    password:"",
    database:"student",
});

db.getConnection((err)=>{
if(err) throw err
    

else{
    console.log("Successfully connected")
}
});
app=express();

app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors());

app.get("/",(req,res)=>{
    console.log("server ")
});
app.get("/report",(req,res)=>{
    console.log("getting data from db");
    db.query('select * from userdata',(err,result)=>{
        if(err) throw err;
            
        
        else{
            console.log(result)
            res.send(result);
        }
    })
})

const storage=multer.diskStorage({
    destination:path.join(__dirname,'../public_html','uploads'),
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname)
    }
})


app.post('/ImageUpload',async(req,res)=>{
    try{
        let upload=multer({storage:storage}).single('avatar');
        upload(req,res,function(err){
            if(!req.file){
                return res.send('Please Select an Image to Upload')
            }
            else if(err instanceof multer.MulterError){
                return res.send(err);
            }
            else if(err){
                return res.send(err);
            }
            const classifiedsadd = {
				image: req.file.filename
			};
            const sql = "INSERT INTO imagesdata SET ?";
            connection.query(sql, classifiedsadd, (err, results) => {  if (err) throw err;
				res.json({ success: 1 })      

			});  

        });
        

    }catch(err){console.log(err)}

})


// app.get("/SignUp",(req,res)=>{
//     console.log("getting data from db");
//     db.query('select * from userdata',(err,result)=>{
//         if(err) throw err
            
        
//         else{
//             console.log(result)
//             res.send(result);
//         }
//     })
// })
app.post("/SignUp",(req,res)=>{
    const Email=req.body.Email;
    const Password=req.body.Password;
    const sql="INSERT INTO userdata (Email, Password) VALUES (?, ?);"
    db.query(sql,[Email,Password],(err,result,fields)=>{
        if(err) throw err;
        else{

            console.log("successful");
            res.send(result);
        }
    })
})

app.delete("/Delete/:Email",(req,res)=>{
    const Email=req.params.Email;
    const sqld=`Delete from userdata where userdata.Email=(?)`;
    db.query(sqld,[Email],(err)=>{
        if(err) throw err;
        
    })
})
app.put("/update",(req,res)=>{
    const Email=req.body.Email;
    const Password=req.body.Password;
    const squp="update  userdata set Password=? where Email=?"
    db.query(squp,[Password,Email],(err)=>{
        if(err) throw err;
        
    })
})
app.post("/Delete",(req,res)=>{
    const Email=req.body.Email;
    
    const sql="delete from userdata where userdata.Email=?"
    db.query(sql,[Email],(err,result,fields)=>{
        if(err) throw err;
        else{

            console.log("successful");
            res.send(result);
        }
    })
})
app.listen(8000,()=>{
    console.log("server listening");
});