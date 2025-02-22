var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.listen("7070",(re,res)=>{
    console.log('Server started at port number 7070');
});

app.use(bodyParser.json());
//load mysql package
const mysql = require('mysql');
//create mysql connection
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"demo"
});
//check connection
connection.connect((error)=>{
    if(error){
        throw error;
    }else{
        console.log("connection success");
    }
});

app.get('/',(req,res)=>{
    res.send("<h3>Welcome to API with mysql</h3>");
});

app.get('/getMobiles',(req,res)=>{

    //query
    connection.query("SELECT * FROM mobiles",(error,results,fields)=>{

        if(error){
            throw error;
        }else{
            res.json({
                "status":1,
                "data":results
            });
        }

    })

});
//get data based on parm id 


app.get('/getMobiles/:id',(req,res)=>{
    var id = req.params.id;
    connection.query("SELECT * FROM mobiles WHERE id=?",[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.json({
                "status":1,
                "data":results
            })
        }
    });
});

//insert query 

app.post("/insertMobiles",(req,res)=>{
    var name = req.body.name;
    var price = req.body.price;
    var ram = req.body.ram;
    var storage = req.body.storage; 

    connection.query("INSERT INTO  mobiles (name,price, ram, storage) VALUES (?,?,?,?)",[name,price,ram,storage],(error,result,fields)=>{
if(error){
    throw error;
}else{
    res.json({
        "status":1,
        "data":result,
        "message":"Data inserted successfully",
        "lastInsertID":result.insertId
    });
}

    });

});

//Delete data

app.delete("/deleteData",(req,res)=>{
    var user_id = req.body.userid;
    connection.query("DELETE from mobiles WHERE id = ?",[user_id],(error,result,fields)=>{
if(error){
    throw error;
}else{
    res.json({
        status:1,
        data:result,
        message:"Data deleted successfully",
    })
}
    })

});

//update data
app.put("/updateData",(req,res)=>{
    var name = req.body.name;
    var price = req.body.price;
    var ram = req.body.ram;
    var storage = req.body.storage; 
    var user_id = req.body.userid;

    connection.query("UPDATE mobiles SET name = ?, price = ? , ram = ?, storage = ? WHERE id = ?",[name,price,ram,storage,user_id],(error,result)=>{
        if(error){
            throw error;
        }else{
            res.json({
                status:1,
                data:result,
                message:"Data Updated successfully",
            })
        }

    })
});

//stored procedure 

app.get("/mobile-details/:id",(req,res)=>{
    var id = req.params.id
connection.query("CALL get_user_details(?)",[id],(error,result)=>{
    if(error){
        throw error;
    }else{
        res.json(result[0]);
    }
});
})
/*WHERE clause : IN, Between , >,<, AND .OR

SELECT * from mobiles WHERE price IN (1000,10000)

SELECT * from mobiles WHERE price BETWEEN 1000 AND 5000

SELECT * from mobiles WHERE price > 20000

SELECT * from mobiles WHERE price <  20000

SELECT * from mobiles WHERE price <  20000 AND id = 2

SELECT * from mobiles WHERE price <  20000 OR id = 2

*/

app.get("/getMobilesCond",(req,res)=>{

    connection.query("SELECT * from mobiles WHERE price BETWEEN 1000 and 10000",(error,result)=>{

        if(error){
            throw error;
        }else{

            res.json({
                "status":1,
                "data":result
            });

        }
    })
})

/**
 * Like Wild cards contains : _& %
 * 
 * SELECT * from mobiles WHERE name LIKE '%a%'
 */


/**Joins 
 * SELECT mb.name as mobile_name, mb.price as m_price FROM mobiles as mb INNER JOIN users as u
 * ON mb.user_id = u.id 
 * 
*/

app.get("/getMobilesJoins",(req,res)=>{

    connection.query("SELECT mb.name as mobile_name, mb.price as m_price FROM mobiles as mb RIGHT JOIN users as u ON mb.user_id = u.id  ",(error,result)=>{

        if(error){
            throw error;
        }else{

            res.json({
                "status":1,
                "data":result
            });

        }
    })
})

// connection.end();

