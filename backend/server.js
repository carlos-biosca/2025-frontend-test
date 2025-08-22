const express = require('express');
const cors = require('cors');
const path = require('path');

const { handleSendEmail } = require('./handlers/sendEmail');
const { handleValidateEmailCode } = require('./handlers/validateEmail');
const { handleGetProducts } = require('./handlers/getProducts');
const { handleStartTrial } = require('./handlers/startTrial');

const app = express();
const PORT = process.env.PORT || 8080;


const allowedOrigins = [
  'http://localhost:5173',
  'https://multistepform-9a317a1cf93d.herokuapp.com'
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


app.post('/api/send-email', (req, res) => handleSendEmail(req, res, req.body));
app.post('/api/validate-email', (req, res) => handleValidateEmailCode(req, res, req.body));
app.get('/api/products', (req, res) => handleGetProducts(req, res, req.query));
app.post('/api/start-trial', (req, res) => handleStartTrial(req, res, req.body));


app.use(express.static(path.join(__dirname, '../frontend/build')));


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
