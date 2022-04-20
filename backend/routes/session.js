const express = require('express');
const sessionController = require('../controllers/session');
const userModel = require('../models/users.js');

/**
 * https://expressjs.com/en/guide/routing.html#express-router
 *
 * A router is a special Express object that can be used to define how to route and manage
 * requests. We configure a router here to handle a few routes specific to students
 */
const router = express.Router();

//changed the path from /session/login to /login for simplicity
router.post('/login', async (req, res, next) => {
    try {
        const body = req.body;
        const result = await sessionController.authenticateUser(body.email, body.password);
        console.log("result of authenticateUser: ", result);
        if(result.error === "Email or password is missing"){
            res.status(400).json({
                error: result.error
            });
        }
        else if(result.error === "Invalid credentials"){
            res.status(401).json({
                error: result.error
            });
        }
        else{
            //generates a session token
            const token = await sessionController.generateAuthToken(body.email, body.role);
            res.status(200).json({"accessToken": token});
        }
    } catch (err) {
        console.error('Failed to create new user:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

//now simply /register
router.post('/register', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        //    const result = await req.models.user.createNewUser(body.email, body.password);
        // const result = await req.models.createNewUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password
        //calls the createNewUser function in the users.js file of the models folder and return the result
        const result = await sessionController.createNewUser(body.firstName, body.lastName, body.email, body.password);
        console.log("Result of createNewUser: ", result);
        if(result.error === "Invalid email"){
            console.log("Invalid email");
            res.status(400).json({message: "Invalid email"});
        } else if(result.error === "User already exists") {
            console.log("User already exists");
            res.status(400).json({message: "User already exists"});
        } else if(result.error === "Incomplete input") {
            console.log("Incomplete input");
            res.status(400).json({message:"Incomplete input"});
        } else {
            console.log("User created");
            //Note: we don't need to authenticate the user here because the user is already created
            const token = await sessionController.generateAuthToken(body.email, body.role);
            res.status(201).json({"accessToken": token});
        }

    } catch (err) {
        console.error('Failed to create new user:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

//TODO: Ideally, we want to have a logout route and a refresh token route (we'll do this later)



module.exports = router;