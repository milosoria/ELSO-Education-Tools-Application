import { useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import netHandler from '../utils/connection'
import { NetworkInfo } from 'react-native-network-info'

const ServerScreen = () => {
    const [server, setServer] = useState(null)
    const [chats, setChats] = useState([])
    const [ip, setIp] = useState('')

    const handleStartServer = async () => {
        try {
            let tempIp = await NetworkInfo.getGatewayIPAddress()()
            setIp(tempIp)
            if (!server) setServer(netHandler.createServer(tempIp, chats, setChats))
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
        <View>
            {ip.length > 0 ? <Text>Server ip: {ip}</Text> : <Text>Server Screen</Text>}
            <Button title="Start Server" onPress={handleStartServer} />
            <Button title="Stop Server" onPress={handleStopServer} />
            {server ? <Text>Server is on</Text> : null}
            <FlatList
                data={chats}
                renderItem={({ item }) => {
                    return <Text style={{ margin: 10, fontSize: 20 }}>{item.msg}</Text>
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


export default ServerScreen
