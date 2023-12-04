require("dotenv/config");

const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();
const port = 9917;

const status = require("./src/endpoints/get/status.js");
const area = require("./src/endpoints/get/area.js");
const map = require("./src/endpoints/get/map.js");

const reserve = require("./src/endpoints/post/reserve.js");
const paid = require("./src/endpoints/post/paid.js");
const unreserve = require("./src/endpoints/post/unreserve.js");
const update = require("./src/endpoints/post/update.js");

const privateKey = fs.readFileSync(
	"/home/admin/conf/web/ssl.app.toncells.org.key",
	"utf8"
);
const certificate = fs.readFileSync(
	"/home/admin/conf/web/ssl.app.toncells.org.crt",
	"utf8"
);
const ca = fs.readFileSync(
	"/home/admin/conf/web/ssl.app.toncells.org.ca",
	"utf8"
);

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca,
};

app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

var allowCrossDomain = function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type");

	next();
};
app.use(allowCrossDomain);

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, (err) => {
	if (err) {
		return console.log("something bad happened", err);
	}
	console.log("\n-------------------------------------------");
	console.log(`TONCELLS MAINNET API server is listening on ${port}`);
	console.log("-------------------------------------------\n");
});

status(app);
area(app);
map(app);
reserve(app);
paid(app);
unreserve(app);
update(app);
