const http = require('http')

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
	res.write('<h1>hello</h1>')
	res.end('<p>bye</p>')
})
.listen(8080)

server.on('listening', () => {
  console.log('8080번 포트에서 서버 대기 중')
})

server.on('error', (error) => {
  console.error(error)
})

// 이런식으로 하나를 더만들어서 동시에 2개를 띄울수도있음.
// const server1 = http.createServer((req, res) => {
// 	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
// 	res.write('<h1>hello world</h1>')
// 	res.end('<p>bye world</p>')
// })
// .listen(8081)