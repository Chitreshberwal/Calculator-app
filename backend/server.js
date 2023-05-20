const express = require("express");
const cors = require("cors");
const mysql = require("mysql");


const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({    
    host: "localhost",    
    user: "root",    
    password: "Chitresh79@",    
    database: "calculation"
})

db.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  });


app.get("/", (req, res) => {   
    // res.json("hello from backend"); 
    const sql = "SELECT * FROM student"; 
    // console.log(sql);   
    db.query(sql, (err, data) => {        
        if(err) return res.json("Error");
        // console.log(data)        
        return res.json(data);    
    });
});


app.post('/create', (req, res) => {    
    const sql = "INSERT INTO student (name, calculation, result) VALUES (?)";    
    const values = [        
        req.body.name,        
        req.body.calculation,
        req.body.result    
    ]    
        db.query(sql, [values], (err, data) => {        
            if(err) return res.json("Error");        
            return res.json(data);    
        })
    })


app.put('/update/:id', (req, res) => {    
    const sql = "UPDATE student SET `name` = ?, `calculation` = ?, `result` = ? WHERE ID = ?";  
    const values = [        
        req.body.name,        
        req.body.calculation,
        req.body.result     
    ]    
        const id = req.params.id;        
        db.query(sql, [...values, id], (err, data) => {        
            if(err) return res.json("Error");        
            return res.json(data);    
        })})

app.delete('/student/:id', (req, res) => {    
    const sql = "DELETE FROM student WHERE ID = ?";    
    const id = req.params.id;        
    db.query(sql, [id], (err, data) => {        
        if(err) return res.json("Error");        
        return res.json(data);    
    })
})



app.listen(8081, () => {    console.log("listening");})