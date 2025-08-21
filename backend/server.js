const http = require('http');
const url = require('url');
const {
  handleSendEmail
} = require('./handlers/sendEmail');
const {
  handleValidateEmailCode
} = require('./handlers/validateEmail');
const {
  handleGetProducts
} = require('./handlers/getProducts');
const {
  handleStartTrial
} = require('./handlers/startTrial');
const {
  sendResponse
} = require('./utils/response');

const API_HANDLERS = {
  '/api/send-email': handleSendEmail,
  '/api/validate-email': handleValidateEmailCode,
  '/api/products': handleGetProducts,
  '/api/start-trial': handleStartTrial
};

const server = http.createServer((req, res) => {
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
    // For GET use query params, for others use parsed JSON body
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
  console.log(`Exposed REST APIs:`);
  for (const path of Object.keys(API_HANDLERS)) {
    console.log(`- ${path}`);
  }
});
