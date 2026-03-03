const http = require("http");

const server = http.createServer((req, res) => {
  res.write("I want to learne CICD");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
