import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "epics",
    password: "N.Jaswanth07",
    port: 5432
});

db.connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch(err => console.error("Error connecting to PostgreSQL database", err));

var a = [[1,2],[2,3],[1,2]];
var hostel,f,r,c;
var name,reg_no,roll_no,email,phone,dept,gender,programme,year,amount,reference_no;
var login_mail,login_password;
var signup_mail,signup_password;
var a;

var nagavalli = [[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]];

var vamsadhara = [[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]];

                
var krishnaveni = [[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]];

var pranahitha = [[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]];

var indravathi = [[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]];

var sabari = [[[1,2],[1,2],[1,2]]
            ,[[1,2],[1,2],[1,2]]
            ,[[1,2],[1,2],[1,2]]];
            
var purna = [[[1,2],[1,2],[1,2]]
            ,[[1,2],[1,2],[1,2]]
            ,[[1,2],[1,2],[1,2]]];

var banganga = [[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]];

var manjeera = [[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]];

var swarnamukhi = [[[1],[1],[1]]
                    ,[[1],[1],[1]]
                    ,[[],[],[1]]
                    ,[[1],[],[1]]];

var bhima = [[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]];

var thungabhadra = [[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]
                ,[[1,2],[1,2],[1,2]]];

var ghataprabha = [[[1],[1],[1]]
                ,[[1],[1],[1]]
                ,[[],[],[1]]
                ,[[1],[],[1]]];

var munneru = [[[1,2],[1,2],[1,2]]
        ,[[1,2],[1,2],[1,2]]
        ,[[1,2],[1,2],[1,2]]
        ,[[1,2],[1,2],[1,2]]
        ,[[1,2],[1,2],[1,2]]];

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get("/",(req,res) => {
    res.render("index.ejs");
});

app.get("/officers", (req, res) => {
    res.render("officers.ejs");
});

app.get("/hostel", (req, res) => {
    res.render("hostel.ejs");
});

app.get("/fee", (req, res) => {
    res.render("fee.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/signup",(req,res) => {
    res.render("signup.ejs");
});

app.post("/signup",(req,res) => {
    signup_mail = req.body["email"];
    signup_password = req.body["password"];
    db.query("insert into login_details(email,password) values($1,$2)",[signup_mail,signup_password],(error,result) => {
        if(error){
            console.log("email already there");
            res.render("signup.ejs");
        }
        else{
            res.render("a.ejs");
        }
    })
});

app.post("/login", (req, res) => {
    login_password = req.body["password"];
    login_mail = req.body["username"];
    db.query("select password from login_details where email=$1",[login_mail],(error,result) =>{
        if(error){
            res.render("login.ejs");
        }
        else{
            var a = result.rows[0].password;
            console.log(a);
            if(login_password == a){
                const h = JSON.stringify(nagavalli);
                res.render("registration.ejs",{ hosteldata: h});
            }
            else{
                res.render("index.ejs");
            }
        }
    });
});

app.post("/floorbooking",(req,res) => {
    hostel = req.body["Hostel Block"];
    name = req.body["Full Name"];
    reg_no = req.body["registration number"];
    roll_no = req.body["Roll Number"];
    email = req.body["Email"];
    phone = req.body["Phone Number"];
    dept = req.body["branch"];
    gender = req.body["gender"];
    programme = req.body["Programme"];
    year = req.body["year"];
    a = selecthostel(hostel);    
    const h = JSON.stringify(a);
    res.render("floorbook.ejs",{hosteldata : h});
});

app.post("/roombooking",(req,res) => {
    f = req.body["Floor Number"];
    r = req.body["Room Number"];
    const h = JSON.stringify(a);
    res.render("cotbook.ejs",{floor: f,room: r,hosteldata: h});
});
app.post("/submit",(req,res) => {
    amount = req.body["Amount Paid"];
    reference_no = req.body["DUK Reference Number"];
    c = req.body["Cot Number"];
    db.query("INSERT INTO Hostel_Students(reg_no,roll_no,name,phno,gender,collegemail,hostel_block,floor_no,room_no,cot_no) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
[reg_no,roll_no,name,phone,gender,email,hostel,f,r,c],(error,results) => {
    if(error){
        console.log('Error inserting data into Hostel_Students:', error.stack);
        res.render("b.ejs");    
    }
    else{
        // db.query("update Hostels set status='Occupied' where hostel_block=$1 and floor_no=$2 and room_no=$3 and cot_no=$4",[hostel,f,r,c],(error,result) => {
        //     if(error){
        //         console.log('Cannot Update Hostel status');
        //     }
        //     else{
        //         console.log('Hostel status is updated');
        //     }
        // });
        // changehostel(hostel,f,r,c);
        console.log('Data inserted into Hostel_Students:', results);
        res.render("form.ejs",{floor: f, room :r});
    }
});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

function selecthostel(hos){
    if(hos == "Nagavalli"){
        return nagavalli;
    }
    if(hos == "Swarnamukhi"){
        return swarnamukhi;
    }
    if(gender == "Male"){
        return vamsadhara;
    }
    else{
        return krishnaveni;
    }
}

function changehostel(hos,f,r,c){
    let a = array[f-1][r-1];
    let i = a.indexOf(c);
    array[f-1][r-1].splice(i,1);
}