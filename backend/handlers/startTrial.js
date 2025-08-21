const { sendResponse } = require('../utils/response');

function handleStartTrial (req, res, body) {
  if (req.method !== 'POST') {
    return sendResponse(res, 405, { error: 'Method Not Allowed' });
  }

  if (!body.user_id) {
    return sendResponse(res, 400, { error: 'User ID is required' });
  }

  console.log(`User user_id=${body.user_id} started trial!`);
  return sendResponse(res, 200, {});
}

module.exports = { handleStartTrial };
