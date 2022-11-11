const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {

    User.find() //{username: req.params.username}
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const email = req.body.email;
    const dogType = req.body.dogType;
    const dogName = req.body.dogName;

    const newUser = new User({
        username,
        name,
        email,
        dogType,
        dogName
    });

    newUser.save()
        .then(() => res.json('User added! ' + newUser))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:username').post((req, res) => {
    User.findOne({username: req.params.username})
         .then(user => {
            user.name = req.body.name;
            user.email = req.body.email;
            user.dogType = req.body.dogType;
            user.dogName = req.body.dogName;
            
            user.save()
                .then(() => res.json('User has been updated!'))
                .catch(err => res.status(406).json('Error: ' + err)); 
        }) 
        .catch(err => res.status(400).json('Error: ' + err));
});



/* router.route('/:username').get((req, res) => {

    User.findOne({username: req.params.username}).then(
        (user) => {

            if (user) {
                res.json("User Found");

                User.findOne({username: req.params.username})
                    .then(user => res.json(user))
                    .catch(err => res.status(400).json('Error: ' + err));
            }
        }
        
    )
    .catch(err => res.status(400).json('Error: ' + err));

        //.then(user => res.json("User Found: " +user))
        //.catch(err => res.status(400).json('Error: ' + err));
});   */








router.route('/:username').get((req, res) => {

    User.findOne({username: req.params.username})
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
            
});
        
 
module.exports = router;