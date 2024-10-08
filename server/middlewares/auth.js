//Middle-ware for authentication

const isAuth = (req,res, next)=>{
   if(req.session.user) {
        next()
   }
   else {
    res.send({
        status:401,
        message:"Unauthorized"
    })
   }
}

module.exports = isAuth;
