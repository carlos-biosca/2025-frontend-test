function handleGetProducts (req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  console.log(`Sending products`);

  return res.status(200).json({
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

