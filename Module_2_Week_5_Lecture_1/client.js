const net = require('net');
const PORT = 8089;

const myArgs = process.argv.slice(2);
const name = myArgs[0];

if (name) {
    console.log(`Client Name=${name}`);

    const client = net.createConnection({
        port: PORT, 
        host: 'localhost'
    });
    
    client.setEncoding('utf8');
    
    client.on('connect', function(){
        console.log("client is connected to server.");
    });
    
    client.on('data', (data) => {
        console.log(data);
    });
    
    process.stdin.on('data', function(message){
        client.write(name + '] ' + message);
    });    
} else {
    console.log('usage: node client.js <NAME>');
}
