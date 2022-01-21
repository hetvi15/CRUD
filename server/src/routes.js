module.exports=(app)=>{
    app.post('/SignUp',(req,res)=>{
        console.log("Here")
        res.send({
            message:`Hello ${req.body.email}! Your user was registered`
        })
    })
}