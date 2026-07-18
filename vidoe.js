// // exports a function
    // function add(a, b){
    //     if (typeof a!== 'number' || typeof b !== 'number'){
    //         throw new Error('Inputs must be numbers!'); //Error handling addition
    //     }
    //     return a + b;
    // }

    // function subtract(a, b){
    //     return a - b;
    // }

    // module.exports = { add, subtract }; //Export object
//end


// raw server.js

const https = require('http'); //Built-in module

const server = https.createServer((req, res) => {
    //req: Incoming request (method, url, headers)
    //res: Outgoing response (write, end)

    if (req.method === 'GET' && req.url === '/') {
        //Manual route check
        res.writeHead(200, {'Content-Type': 'text/plain'}); //Manual headers
        res.end ('Hello from Raw Node.js!'); //Send body & close
    } else{
        res.writeHead(404, {'Content-Type': 'text/plain'}); 
        res.end('Not Found :('); // Basic error
    }
});

const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`Raw server running on http://localhost:${PORT}`);
});