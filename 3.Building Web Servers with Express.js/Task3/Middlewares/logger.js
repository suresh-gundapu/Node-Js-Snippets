/**Custom Middleware for Logging Requests
Middlewares are functions that execute before handling requests. */

const logger = (req, res, next) => {
  console.log("Request URL: ", req.url);
  console.log("Request Method: ", req.method);
  next(); // Move to the next middleware/route
};

module.exports = logger;
