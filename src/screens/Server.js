import { useState } from 'react'
import { FlatList, Text } from 'react-native'
import netHandler from '../utils/connection'
import { NetworkInfo } from 'react-native-network-info'
import { Box, Button } from '../atoms'

const ServerScreen = () => {
    const [server, setServer] = useState(null)
    const [chats, setChats] = useState([])
    const [ip, setIp] = useState('')

    const handleStartServer = async () => {
        try {
            let tempIp = await NetworkInfo.getIPV4Address()
            console.log('Server ip is:', tempIp)
            setIp(tempIp)
            if (!server)
                setServer(netHandler.createServer(tempIp, chats, setChats))
        } catch (e) {
            console.log(e.message)
        }
    }

    const handleStopServer = () => {
        if (server) {
            server.close()
            setServer(null)
        }
    }

    return (
        <Box>
            {ip && ip.length > 0 ? (
                <Text>Server ip: {ip}</Text>
            ) : (
                <Text>Server Screen</Text>
            )}
            <Button onPress={handleStartServer}>
                <Text>Start Server</Text>
            </Button>
            <Button onPress={handleStopServer}>
                <Text>Stop Server</Text>
            </Button>
            {server ? <Text>Server is on</Text> : null}
            <FlatList
                data={chats}
                renderItem={({ item }) => {
                    return (
                        <Text style={{ margin: 10, fontSize: 20 }}>
                            {item.msg}
                        </Text>
                    )
                }}
                keyExtractor={(item) => item.id}
            />
        </Box>
    )
}

export default ServerScreen
