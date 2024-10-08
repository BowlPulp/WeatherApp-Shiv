const auth = require("express").Router();
const UserDB = requre("./UserDb.json")
auth.post("/login", (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;

    let index = UserDB.findIndex((elm)=>elm.email.toLowerCase())
    if(index){
        if(UserDB[index].password === password){
            req.session.user = UserDB[index];
        }
        else {
            res.send({
                status: 401,
                message: "UnAuthorized"
            })
        }
    }
    else {
        res.send({
            status: 401,
            message: "User not found"
        })
    }
});


auth.get("/logout", (req,res)=>[
    req.session.destroy(),
    res.send({
        status: 200,
        message: "Logged out Sucessfully"
    })
]);