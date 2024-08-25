const express = require("express");
const router = express.Router();
const User = require("../models/userModel")
const Admin = require("../models/adminModel")

router.post("/login", async(req, res) => {

      const {email , password} = req.body

      try {
          const user = await User.findOne({email , password})
          if(user) {
            // localStorage.removeItem('admin');
              res.send(user)
          }
          else{
              return res.status(400).json(error);
          }
      } catch (error) {
        return res.status(400).json(error);
      }
  
});


router.post("/admin", async(req, res) => {

    const {email , password} = req.body
      console.warn(req.body);
      
    try {
        const adm = await Admin.findOne({email , password})
        if(adm) {
            // localStorage.removeItem('user');
            res.send(adm)
        }
        else{
            return res.status(400).json(error);
        }
    } catch (error) {
      return res.status(400).json(error);
    }

});

router.post("/register", async(req, res) => {

    try {
        const newuser = new User(req.body)
        
        await newuser.save()
        res.send('User registered successfully')
    } catch (error) {
      return res.status(400).json(error);
    }

});


module.exports = router