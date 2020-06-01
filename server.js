const http = require("http"); 
const app = require("./app");//Middleware
const server = http.createServer(app);

const port = process.env.PORT || 3000; //Get environment port number
server.listen(port, () => console.log(`Connected to server and listening to port ${port}`));