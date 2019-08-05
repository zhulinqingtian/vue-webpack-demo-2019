const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const config = jsonServer.defaults()

server.use(config)
server.use('/api', router)
server.listen(8081, () => {
  console.log('json server is running')
})
