const { sendResponse } = require('../utils/response');
const { emailMap } = require('./sendEmail');

function handleValidateEmailCode (req, res, body) {
  if (req.method !== 'POST') {
    return sendResponse(res, 405, { error: 'Method Not Allowed' });
  }

  try {
    const { email, code } = body;
    if (!email || !code) {
      return sendResponse(res, 400, { error: 'Email and code are required' });
    }

    const isValid = (emailMap[email]?.code || null) === code.toString();
    console.log(`Validating Code: code=${code}, email=${email}: ${isValid ? 'valid' : 'invalid'}`);

    if (!isValid) {
      return sendResponse(res, 400, { error: 'Invalid code or email' });
    }

    delete emailMap[email];
    return sendResponse(res, 200, {
      user_id: Math.ceil(1e5 + Math.random() * 1e8)
    });
  } catch {
    return sendResponse(res, 400, { error: 'Invalid parameters' });
  }
}

module.exports = { handleValidateEmailCode };
