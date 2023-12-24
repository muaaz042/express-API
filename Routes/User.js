const router = require('express').Router();
const UserSchema = require('../Models/UserModel');


router.get('/user/:email', async (req, res) =>{
    let email = req.params.email;
    try {
        let data;
        data = await UserSchema.find();
        if(email == data.email){
            console.log(email + " is verified.");
        }
    } 
    catch (error) {
        console.log(error);
    }
})