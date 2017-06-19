const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, './db.json'));
const middlewares = jsonServer.defaults();

const port = 3000;

server.use(middlewares);

server.get('/echo', (req, res) => {
	res.jsonp(req.query)
});

server.get('/emp', (req, res) => {
	res.sendFile(path.resolve(__dirname + `/../public/index.html`));
});

server.get('/dep', (req, res) => {
	res.sendFile(path.resolve(__dirname + `/../public/index.html`));
});

server.use(jsonServer.bodyParser);
/*server.use((req, res, next) => {
	if (req.method === 'POST') {
		// req.body.createdAt = Date.now();
		console.log(req);
	}
	next();
});*/

server.use(router);
server.listen(port, () => {
	console.log('JSON Server is running');
	console.log('http://localhost:' + port + '/');
});