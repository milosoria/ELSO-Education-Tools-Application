import TcpSocket from 'react-native-tcp-socket'

const PORT = 6666

// TODO: finish netHandler, handle errors, etc.
const netHandler = {
    createClient(ip, setChats) {
        const client = TcpSocket.createConnection(
            { port: PORT, host: ip },
            () => {
                console.log('@Client: opened on ' + client.address().address)
            }
        )

        client.on('data', (data) => {
            setChats((prevState) => [
                ...prevState,
                { id: prevState.length + 1, msg: data },
            ])
            console.log('@Client: Received: ' + data)
        })

        client.on('error', (error) => {
            console.log('@Client: ' + error)
        })

        client.on('close', () => {
            console.log('@Client: close')
        })

        return client
    },
    createServer(setChats) {
        const server = TcpSocket.createServer((socket) => {
            console.log(
                '@ServerSocket: connected on ' + socket.address().address
            )

            socket.on('data', (data) => {
                let response = JSON.parse(data)
                setChats((chats) => [
                    ...chats,
                    { id: chats.length + 1, msg: response.msg },
                ])
                console.log('@ServerSocket: Received: ' + response)
                return
            })

            socket.on('error', (error) => {
                console.log('error ' + error)
            })

            socket.on('close', (error) => {
                console.log(
                    '@ServerSocket: socket closed ' + (error ? error : '')
                )
            })
        }).listen({ port: PORT, host: '0.0.0.0' }, () => {
            console.log('@Server: opened on ' + server.address().address)
        })

        server.on('listening', () => {
            console.log('@Server: listening')
        })

        server.on('connection', () => {
            console.log('@Server: connection')
        })

        server.on('error', (error) => {
            console.log('@Server:' + error)
        })

        server.on('close', () => {
            console.log('@Server: close')
        })

        return server
    },
}

export default netHandler
