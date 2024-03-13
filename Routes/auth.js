const router = require("express").Router();
const User= require("../models/User")
const bcrypt = require("bcrypt")


router.post("/register",async (req,res)=>{

    try{
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(req.body.password,salt)
        const user = await new User({
            username:req.body.username,
            email: req.body.email,
            password:hashedpassword
        }).save()
        res.send(user)

    }
    catch(err){
        console.log(err)

    }


   

})



router.post("/login",async(req,res)=>{
    try{

        const loggedinuser= await User.findOne( { email : req.body.email} )

        if(!loggedinuser){
            return res.send("User not found")
        }

        const password =await bcrypt.compare(req.body.password , loggedinuser.password)

        if(!password){
            return res.send("wrong password")
        }

        return res.json(loggedinuser)
    }
    catch(err){
        console.log(err)
        
    }

})



module.exports=router