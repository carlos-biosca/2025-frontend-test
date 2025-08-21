const { sendResponse } = require('../utils/response');
const { isValidEmail } = require('../utils/validation');

let emailMap = {};

function handleSendEmail (req, res, query) {
  if (req.method !== 'GET') {
    return sendResponse(res, 405, { error: 'Method Not Allowed' });
  }

  const email = query.email;
  if (!email || !isValidEmail(email)) {
    return sendResponse(res, 400, { error: 'Invalid email address' });
  }

  const now = Date.now();
  const lastSent = emailMap[email]?.sentAt || 0;
  if ((now - lastSent) < 30 * 1000) {
    return sendResponse(res, 429, { error: 'Please wait 30 seconds before resending' });
  }

  const code = Math.floor(Math.random() * (1e6 - 1)).toString().padStart(6, '0');
  emailMap[email] = { code, sentAt: now };
  setTimeout(() => {
    console.log(`Removing code after 5 min: email=${email}`);
    delete emailMap[email];
  }, 5 * 60 * 1000);

  console.log(`Code for email=${email}: ${code}`);
  sendResponse(res, 200, { code });
}

module.exports = { handleSendEmail, emailMap };
