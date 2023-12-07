const net = require('net');
const PORT = 8089;

const server = net.createServer();

server.listen(PORT, () => {
  console.log(`Server is listening on PORT=${PORT}`);
});

const connectedClients = [];

server.on('connection', (client) => {
  // console.log('a client has connected', client);
  connectedClients.push(client);
  console.log('a client has connected');

  client.setEncoding('utf8');

  client.on('data', (message) => {

    console.log('client sent:', message);

    for (let eachClient of connectedClients){
      if (eachClient !== client){
        eachClient.write(message);
      }
    }

  });

});
