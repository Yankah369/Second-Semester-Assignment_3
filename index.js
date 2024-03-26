const http = require("http");

const port = 3000;
const hostname = "localhost";
const authorizedUserInfo = {username: "Kwame", password: "Yankah2024"}

function requestHandler(req, res) {
    // const username = req.headers.username
    // const password = req.headers.password
    const { username, password} =  req.headers
    console.log(req.headers)
    if (username === authorizedUserInfo.username && password === authorizedUserInfo.password){
        if (req.method === "GET" && req.url === "/books"){
            return res.end("getting books from server")
          }  
          if (req.method === "PUT" && req.url === "/books"){
            return res.end("modifying books")
          }  
          if (req.method === "POST" && req.url === "/books"){
            return res.end("adding books to server")
          }  
          if (req.method === "PATCH" && req.url === "/books"){
            return res.end(" patching book titles")
          }  

          if (req.method === "DELETE" && req.url === "/books"){
            return res.end("deleting books books from server")
          }  
          if (req.method === "GET" && req.url === "/books/author/"){
            return res.end("getting book titles of a particular author from server")
          }  
          if (req.method === "POST" && req.url === "/books/author/"){
            return res.end("getting books from server")
          }  
          if (req.method === "PUT" && req.url === "/books/author/"){
            return res.end("getting books from server")
          }   
          if (req.method === "PATCH" && req.url === "/books/author/"){
            return res.end("patching books for a particular author")
          }
          if (req.method === "DELETE" && req.url === "/books/author/"){
            return res.end("deleting author")
          }
    } else {
        res.statusCode = 401
        res.end("incorrect login details")
    }
}

const server = http.createServer(requestHandler);

server.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);