const express = require('express');
const router = express.Router();
const messagesController = require('../../../controllers/api/v1/messages');

router.get('/', (req, res) => {
    res.send("GET messages");
});

router.get('/:id', (req, res) => {
    res.send("GET messages with id ID");
});

router.post('/', (req, res) => {
    res.send("POSTING a new message for user Pickachu");
});

router.put('/:id', (req, res) => {
    res.send("UPDATING a message with id ID");
});

router.delete('/:id', (req, res) => {
    res.send("DELETING a message with id ID");
});

module.exports = router;