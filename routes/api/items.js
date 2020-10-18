const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Item');

//@route GET api/items
//@desc Get All /items
//@access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});
//get 1 item
router.get('/:id', (req, res) => {
  Item.findOne({ _id: req.params.id })
    .then(item => res.json(item));
});
//@route POST api/items
//@desc Create an item
//@access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});
//@route DELETE api/items/:id
//@desc Delete an item
//@access Public
router.delete('/:id', (req, res) => {

  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});



router.put('/:id', (req, res) => {

  Item.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(item => res.json(req.body))
    .catch(err => res.status(404).json(err))

});



module.exports = router;
