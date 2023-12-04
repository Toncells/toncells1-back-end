const fs = require("fs");
var filepath1 = `/${process.env.root}/static/map/original.png`;
var filepath2 = `/${process.env.root}/static/map/minted.png`;
var filepath3 = `/${process.env.root}/static/map/free.png`;
var filepath4 = `/${process.env.root}/static/map/edited.png`;

const map = (app) => {
	app.get("/api/mapOriginal", function (req, res) {
		var img = fs.readFileSync(filepath1);
		res.writeHead(200, { "Content-Type": "image/gif" });
		res.end(img, "binary");
	});

	app.get("/api/mapMinted", function (req, res) {
		var img = fs.readFileSync(filepath2);
		res.writeHead(200, { "Content-Type": "image/gif" });
		res.end(img, "binary");
	});

	app.get("/api/mapFree", function (req, res) {
		var img = fs.readFileSync(filepath3);
		res.writeHead(200, { "Content-Type": "image/gif" });
		res.end(img, "binary");
	});

	app.get("/api/mapEdited", function (req, res) {
		var img = fs.readFileSync(filepath4);
		res.writeHead(200, { "Content-Type": "image/gif" });
		res.end(img, "binary");
	});
};

module.exports = map;
