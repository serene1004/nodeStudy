const http = require('http')
const fs = require('fs').promises

const server = http.createServer(async (req, res) => {
  try {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
    const data = await fs.readFile('./server2.html')
    res.end(data)
  } catch (error) {
    console.error(error)
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' })
    res.end(error.message)
  }
})
.listen(8080)

server.on('listening', () => {
  console.log('8080번 포트에서 서버 대기 중')
})

server.on('error', (error) => {
  console.error(error)
})