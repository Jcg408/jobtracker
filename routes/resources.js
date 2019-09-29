const router = require('express').Router();
let Resource = require('../models/resource');

router.route('/list').get((req, res) => {
    Resource.find()
    .then(resources => res.json(resources))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res )=> {
    const title = req.body.title;
    const subject  = req.body.subject;
    const description = req.body.description; 
    const url = req.body.url;

    const newResource= new Resource({title, subject, description, url});

    newResource.save()
        .then(()=> res.json('Data added'))
        .catch(err => res.status (400).json('Error: ' + err));
});

router.route('/:id').get((req, res)=> {
    Resource.findById(req.params.id)
    .then(resource => res.json(resource))
    .catch(err=> res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res)=> {
    Resource.findByIdAndDelete(req.params.id)
    .then(resource => res.json('Data deleted'))
    .catch(err=> res.status(400).json('Error: ' + err));
});


module.exports = router;