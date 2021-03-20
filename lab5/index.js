const express = require('express');
const app = express();
const port = 3000;
const messagesRouter = require('./routers/api/v1/messages');

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/v1/messages', messagesRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});