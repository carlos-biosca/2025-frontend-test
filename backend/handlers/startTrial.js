function handleStartTrial (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const body = req.body;

  if (!body.user_id) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  console.log(`User user_id=${body.user_id} started trial!`);
  return res.status(200).json({});
}

module.exports = { handleStartTrial };
