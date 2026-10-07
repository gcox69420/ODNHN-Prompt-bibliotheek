const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const FILE = path.join(__dirname, "index.html");

http
  .createServer((req, res) => {
    fs.readFile(FILE, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Kan de pagina niet laden.");
        return;
      }
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "no-referrer",
      });
      res.end(data);
    });
  })
  .listen(PORT, () => {
    console.log("Promptbibliotheek draait op poort " + PORT);
  });
