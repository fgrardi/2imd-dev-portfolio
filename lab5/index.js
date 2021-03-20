const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/v1/messages', (req, res) => {
    res.send("GET messages");
});

app.get('/api/v1/messages/:id', (req, res) => {
    res.send("GET messages with id ID");
});

app.post('/api/v1/messages', (req, res) => {
    res.send("POSTING a new message for user Pickachu");
});

app.put('/api/v1/messages/:id', (req, res) => {
    res.send("UPDATING a message with id ID");
});

app.delete('/api/v1/messages/:id', (req, res) => {
    res.send("DELETING a message with id ID")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});