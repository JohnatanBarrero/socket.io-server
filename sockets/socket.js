const { io } = require('../index');

//Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => { console.log('Cliente desconectado') });
    client.on('mensaje', (payload) => {
        console.log('mensaje', payload);
        io.emit('mensaje',{admin:'mensaje desde el back'});
    });
});