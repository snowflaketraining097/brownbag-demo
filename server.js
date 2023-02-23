const http = require('http')
const PORT = process.env.PORT || 8080
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Hello Cloud Run! Hello Fast Retailing')
  })
  .listen(PORT, () => console.log('Listening on', PORT))
