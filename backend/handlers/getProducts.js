const { sendResponse } = require('../utils/response');

function handleGetProducts (req, res) {
  if (req.method !== 'GET') {
    return sendResponse(res, 405, { error: 'Method Not Allowed' });
  }

  console.log(`Sending products`);
  sendResponse(res, 200, {
    monthly: {
      price: "9.99",
      currency: "USD",
      trial_days: 3
    },
    year: {
      price: "87.99",
      currency: "USD",
      trial_days: 7
    }
  });
}

module.exports = { handleGetProducts };
