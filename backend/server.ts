const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.get('/fire', (req, res) => {
    res.send('\u{1F525} x \u{1F30A}')
})
// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})