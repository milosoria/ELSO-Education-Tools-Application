import { createConnection, createServer } from 'react-native-tcp'

const netHandler = {
    createClient(ip, chats, setChats) {
        const client = createConnection(6666, ip, () => {
            console.log('opened client on ' + JSON.stringify(client.address()))
            // client.write('Hello, server! Love, Client.');
        })

        client.on('data', (data) => {
            setChats([...chats, { id: chats.length + 1, msg: data }])
            // console.log('Client Received: ' + data);

            // client.destroy(); // kill client after server's response
            // this.server.close();
        })

        client.on('error', (error) => {
            console.log('client error ' + error)
        })

        client.on('close', () => {
            console.log('client close')
        })
        return client
    },
    createServer(chats, setChats) {
        const server = createServer((socket) => {
            console.log('server connected on ' + socket.address().address)

            socket.on('data', (data) => {
                let response = JSON.parse(data)
                setChats([...chats, { id: chats.length + 1, msg: response.msg }])
                //   console.log('Server Received: ' + data);
                //   socket.write('Echo server\r\n');
            })

            socket.on('error', (error) => {
                console.log('error ' + error)
            })

            socket.on('close', (error) => {
                console.log('server client closed ' + (error ? error : ''))
            })
        }).listen(6666, () => {
            console.log('opened server on ' + JSON.stringify(server.address()))
        })

        server.on('error', (error) => {
            console.log('error ' + error)
        })

        server.on('close', () => {
            console.log('server close')
        })

        return server
    }
}

export default netHandler
