import { useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import netHandler from '../utils/connection'
import * as Network from 'expo-network'
import '../../shim'

const ServerScreen = () => {
    const [server, setServer] = useState(null)
    const [chats, setChats] = useState([])
    const [ip, setIp] = useState('')

    const handleStartServer = async () => {
        if (!server) setServer(netHandler.createServer(chats, setChats))
        try {
            let tempIp = await Network.getIpAddressAsync()
            setIp(tempIp)
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
            {ip.length > 0 ? <Text>Server Screen: {ip}</Text> : <Text>Server Screen</Text>}
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
