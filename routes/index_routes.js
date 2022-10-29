const express =  require('express');
const router =  express.Router();


router.get("/index",(req,res)=>{
    res.render("index");
})

router.get("/mi_perfil",(req,res)=>{
    res.render("mi_perfil");
})

module.exports = router;