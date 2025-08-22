const { emailMap } = require('./sendEmail');

function handleValidateEmailCode (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email, code } = req.body;

    if (!email || !code) {
      return res.status(400).json({ error: 'Email and code are required' });
    }

    const isValid = (emailMap[email]?.code || null) === code.toString();
    console.log(`Validating Code: code=${code}, email=${email}: ${isValid ? 'valid' : 'invalid'}`);

    if (!isValid) {
      return res.status(400).json({ error: 'Invalid code or email' });
    }

    delete emailMap[email];
    return res.status(200).json({
      user_id: Math.ceil(1e5 + Math.random() * 1e8)
    });
  } catch {
    return res.status(400).json({ error: 'Invalid parameters' });
  }
}

module.exports = { handleValidateEmailCode };
