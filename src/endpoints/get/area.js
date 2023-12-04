const fs = require("fs");

const area = (app) => {
	app.get("/api/area", function (req, res) {
		const id = req.body.areaId;
		var img = fs.readFileSync(
			`/${process.env.root}/src/static/img/area/#${id}.png`
		);
		res.writeHead(200, { "Content-Type": "image/gif" });
		res.end(img, "binary");
	});
};

module.exports = area;
