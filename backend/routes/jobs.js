const router = require('express').Router();
let Job = require('../models/job');

router.route('/').get((req, res) => {
    Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res )=> {
    const username = req.body.username;
    const company = req.body.company;
    const action = req.body.action;
    const date = Date.parse(req.body.date);
    const next = req.body.next;

    const newJob= new Job({username, company, action, date, next});

    newJob.save()
        .then(()=> res.json('Data added'))
        .catch(err => res.status (400).json('Error: ' + err));
});

router.route('/:id').get((req, res)=> {
    Job.findById(req.params.id)
    .then(job => res.json(job))
    .catch(err=> res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res)=> {
    Job.findByIdAndDelete(req.params.id)
    .then(job => res.json('Data deleted'))
    .catch(err=> res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res)=> {
    Job.findById(req.params.id)
    .then(job => {
        job.username = req.body.username;
        job.company = req.body.company;
        job.contact = req.body.contact;
        job.action = req.body.action;
        job.date = Date.parse(req.body.date);
        job.note = req.body.note;

        job.save()
        .then(()=> res.json('Data updated'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;