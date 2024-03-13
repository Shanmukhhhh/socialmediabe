const router = require("express").Router()


router.get("/",(req,res)=>{
    res.send("its users page")

})

router.get("/login", (req, res) => {
    res.send("its login route")
})

router.get("/reg",(req,res)=>{
    res.send("hello")
})

module.exports=router