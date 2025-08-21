function sendResponse (res, statusCode, data, contentType = 'application/json') {
  res.writeHead(statusCode, { 'Content-Type': contentType });
  res.end(JSON.stringify(data));
}

module.exports = { sendResponse };