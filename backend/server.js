const express = require('express');
const cors = require('cors');

const { handleSendEmail } = require('./handlers/sendEmail');
const { handleValidateEmailCode } = require('./handlers/validateEmail');
const { handleGetProducts } = require('./handlers/getProducts');
const { handleStartTrial } = require('./handlers/startTrial');

const app = express();
const PORT = process.env.PORT || 8080;

const allowedOrigins = [
  'http://localhost:5173',
  'https://multistep-form-subscription.vercel.app/'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'El CORS policy no permite este origen: ' + origin;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json());

app.get('/api/send-email', handleSendEmail);
app.post('/api/validate-email', handleValidateEmailCode);
app.get('/api/products', handleGetProducts);
app.post('/api/start-trial', handleStartTrial);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
