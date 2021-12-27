const express = require('express');
const router = express.Router();

//@route    GET api/contacts
//@desc     Get all user contacts
//@access   Public
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

//@route    POST api/contacts
//@desc     Add  new contacts
//@access   Private
router.post('/', (req, res) => {
    res.send('Add contact');
});

//@route    PUT api/contacts/:id
//@desc     Update contacts
//@access   Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

//@route    DELETE api/contacts/:id
//@desc     Delete contacts
//@access   Private
router.delete('/:id', (req, res) => {
    res.send('Update contact');
});

module.exports = router;