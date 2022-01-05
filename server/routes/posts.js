const express = require('express');
const User2 = require('../model/userschema');
const router = express.Router();
const app=express();
require('../db/conn');

router.get('/' , (req, res)=> {
    res.send("this works");
});
router.get('/about', (req,res)=>{
      res.send("about page");
});
router.post('/register', async (req,res)=>{
     const {name , password} = req.body;
     try{
        const {name , password} = req.body;
        if(!name || !password)
        {
            return res.status(422).json({ error:" please fill the enteries properly"});
        }
        const userLogin= await User2.findOne({name:name});
        if(!userLogin)
        {
            res.status(220).json({error:"User login failed"})
        }
        else{
            res.status(200).json({error:"login succesful"});
        }
     }
     catch(err)
     {
         console.log(err);
     }
    
    

   //   res.send("dashboard");
});
router.get('/companies', (req,res)=>{
    res.send("companies");
});

 

module.exports=router;