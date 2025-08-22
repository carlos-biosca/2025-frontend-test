const { isValidEmail } = require('../utils/validation');

let emailMap = {};

function handleSendEmail (req, res) {
  const email = req.method === 'GET' ? req.query.email : req.body.email;

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const now = Date.now();
  const lastSent = emailMap[email]?.sentAt || 0;
  if ((now - lastSent) < 30 * 1000) {
    return res.status(429).json({ error: 'Please wait 30 seconds before resending' });
  }

  const code = Math.floor(Math.random() * (1e6 - 1)).toString().padStart(6, '0');
  emailMap[email] = { code, sentAt: now };
  setTimeout(() => {
    console.log(`Removing code after 5 min: email=${email}`);
    delete emailMap[email];
  }, 5 * 60 * 1000);

  console.log(`Code for email=${email}: ${code}`);
  return res.status(200).json({ code });
}

module.exports = { handleSendEmail, emailMap };
