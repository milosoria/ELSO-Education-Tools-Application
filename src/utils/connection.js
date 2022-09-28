import TcpSocket from 'react-native-tcp-socket'


const PORT = 6666

const netHandler = {
    createClient(ip, chats, setChats) {
        const client = TcpSocket.createConnection({ port: PORT, host: ip }, () => {
            console.log('opened Client on ' + JSON.stringify(client.address()))
        })

        client.on('data', (data) => {
            setChats([...chats, { id: chats.length + 1, msg: data }])
            console.log('@Client: Received: ' + data)

        })

        client.on('error', (error) => {
            console.log('@Client: error ' + error)
        })

        client.on('close', () => {
            console.log('@Client: close')
        })
        return client
    },
    createServer(chats, setChats) {
        const server = TcpSocket.createServer((socket) => {

            console.log('DOES get here')
            console.log('@Server: connected on ' + socket.address().address)

            socket.on('data', (data) => {
                let response = JSON.parse(data)
                setChats([...chats, { id: chats.length + 1, msg: response.msg }])
                console.log('@Server: Received: ' + data)
            })

            socket.on('error', (error) => {
                console.log('error ' + error)
            })

            socket.on('close', (error) => {
                console.log('@Server: Client closed ' + (error ? error : ''))
            })
        }).listen({ port: PORT }, () => {
            console.log('opened Server on ' + JSON.stringify(server.address()))
        })

        server.on('error', (error) => {
            console.log('error ' + error)
        })

        server.on('close', () => {
            console.log('@Server: close')
        })

        return server
    }
}

export default netHandler
