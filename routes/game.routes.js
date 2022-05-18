const router = require("express").Router();
const User = require('../models/User.model')

router.get('/leaderboard', (req, res, next) => {
  User.find()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => next(err))
});


// get a specific user
router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => next(err))
});


// update a user
router.put('/:id', (req, res, next) => {
  const { pointsLevel1, pointsTotal } = req.body
  User.findByIdAndUpdate(req.params.id, {
    pointsLevel1,
    pointsTotal
  }, { new: true })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => next(err))
});


router.put('/level2/:id', (req, res, next) => {
  const { pointsLevel2, pointsTotal } = req.body
  User.findByIdAndUpdate(req.params.id, {
    pointsLevel2,
    pointsTotal
  }, { new: true })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => next(err))
});


router.put('/level3/:id', (req, res, next) => {
  const { pointsLevel3, pointsTotal } = req.body
  User.findByIdAndUpdate(req.params.id, {
    pointsLevel3,
    pointsTotal
  }, { new: true })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => next(err))
});




module.exports = router;