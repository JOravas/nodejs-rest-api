const express = require('express');
const restRouter = express.Router();
const APIResponse = require('../models/api-response');
const statusCodes = require('http-status-codes').StatusCodes;
const APIVersion = 1;

restRouter.use(express.json());
restRouter.use(express.urlencoded({ extended: true }));

// Default error handler
restRouter.use((err, req, res, next) => {
  const reason = `Error in processing ${req.method} ${req.url}`;
  res.status(statusCodes.BAD_REQUEST).json(
    new APIResponse(APIVersion, reason));
});

// Endpoints

restRouter.get(`/info`, (req, res) => {
  res.json(new APIResponse(APIVersion, 'API call succeeded!'));
});

restRouter.post('/info', (req, res) => {
  const { data } = req.body;

  if(!data) {
    res.status(statusCodes.BAD_REQUEST).json(
      new APIResponse(APIVersion, 'No data in request body!'));
  }
  else {
    res.json(new APIResponse(APIVersion, data));
  }
});

// Reject all other requests with 400 Bad Request
restRouter.all('*', (req, res) => {
  const reason = `Invalid request: ${req.method} ${req.url}`;
  res.status(statusCodes.BAD_REQUEST).json(
    new APIResponse(APIVersion, reason));
})

module.exports = restRouter;