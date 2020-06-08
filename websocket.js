const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({port: 9000});
//Creating a connection for all the clients making requests to this server.
WSS.on('connection', (ws)=>{
    //grabbing data from a client.
    ws.on('message', (message)=>{
     //Using the connection to access an array of all the clients that are connected.
     WSS.clients.forEach((client)=>{
        client.send(message);
    });     
    
    });
    console.log('We are connected');

});