const router = require("express").Router();
const User = require('../models/User.model')


// get a specific user
router.get('/:id', (req, res, next) => {
  Project.findById(req.params.id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => next(err))
});

// update a user
router.put('/:id', (req, res, next) => {
  const { points } = req.body
  User.findByIdAndUpdate(req.params.id, {
    points
  }, { new: true })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => next(err))
});





module.exports = router;