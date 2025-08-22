const http = require('http');
const url = require('url');
const { handleSendEmail } = require('./handlers/sendEmail');
const { handleValidateEmailCode } = require('./handlers/validateEmail');
const { handleGetProducts } = require('./handlers/getProducts');
const { handleStartTrial } = require('./handlers/startTrial');
const { sendResponse } = require('./utils/response');

// CORS setup
const allowedOrigins = [
  'http://localhost:5173',
  'https://TU-APP-FRONTEND.herokuapp.com'
];

function setCorsHeaders (req, res) {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
}

const API_HANDLERS = {
  '/api/send-email': handleSendEmail,
  '/api/validate-email': handleValidateEmailCode,
  '/api/products': handleGetProducts,
  '/api/start-trial': handleStartTrial
};

const server = http.createServer((req, res) => {
  setCorsHeaders(req, res);

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  let rawBody = '';
  req.on('data', chunk => {
    rawBody += chunk.toString();
  });

  req.on('end', () => {
    let body = {};
    if (rawBody) {
      try {
        body = JSON.parse(rawBody);
      } catch {
        return sendResponse(res, 400, { error: 'Invalid JSON body' });
      }
    }

    const data = req.method === 'GET' ? query : body;

    (API_HANDLERS[path]
      ? API_HANDLERS[path](req, res, data)
      : sendResponse(res, 404, { error: 'Not found' })
    );
  });
});

const PORT = Number.parseInt(process.env.PORT || 8080);
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
