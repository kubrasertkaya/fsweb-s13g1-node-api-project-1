const server = require("./api/server");

const port = 9000;
console.log("hello world");
server.listen(port, () => {
  console.log("server is listening " + port);
});
// START YOUR SERVER HERE
