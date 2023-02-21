const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

const middleware = jsonServer.defaults();
server.use(middleware);

server.use(router);

server.listen(3002, () => {
    console.log('json server listening on 3002')
})

module.exports = server