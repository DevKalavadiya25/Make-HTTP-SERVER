///////// Node.js HTTP Server rendring METHOD-2 ////////
const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8000;

let requesthandler = (req, res) => {
  let filename = "";
  switch (req.url) {
    case "/":
      filename = "home.html";
      break;
    case "/about":
      filename = "about.html";
      break;
    case "/contact":
      filename = "contact.html";
      break;
    default:
      filename = "404.html";
  }

  fs.readFile(path.join(__dirname, "views", filename), "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }
    res.end(data);
  });
};

const httpServer = http.createServer(requesthandler);
httpServer.listen(port, (err) => {
  if (err) {
    console.log("Error starting server:", err);
    return;
  }
  console.log(`Server is running on port ${port}`);
});

