const router = require('express').Router();
let Budget = require('../models/budget.model.js');

router.route('/').get((req, res) => {
    Budget.find() //{username: req.params.username}
        .then(budget => res.json(budget))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const cost = req.body.cost;
    const date = req.body.date;

    const newBudgetItem = new Budget({
        username,
        description,
        cost,
        date
    });

    newBudgetItem.save()
        .then(() => res.json('Budget Item added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Budget.findById(req.params.id)
        .then(budget => res.json(budget))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:id').delete((req, res) => {
    Budget.findByIdAndDelete(req.params.id)
        .then(() => res.json('Budget Item deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Budget.findById(req.params.id)
        .then(budget => {
            budget.username = req.body.username;
            budget.description = req.body.description;
            budget.cost = req.body.cost;
            budget.date = req.body.date;

            budget.save()
                .then(() => res.json('Budget item has been updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;