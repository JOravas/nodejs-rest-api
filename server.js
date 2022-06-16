const express = require('express');
const app = express();
const restRouter = require('./routers/rest-api');
const statusCodes = require('http-status-codes').StatusCodes;
const APIVersion = 1;
const PORT = process.env.PORT || 3000;

// Remove the following HTTP Response Header:
//  X-Powered-By: Express
app.disable('x-powered-by');

// Let REST router handle all API requests
app.use('/api', restRouter);

// Reject other requests with 400 Bad Request
app.all('*', (req, res) => {
  const reason = `Invalid request: ${req.method} ${req.url}`;
  res.status(statusCodes.BAD_REQUEST).send(reason);
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});