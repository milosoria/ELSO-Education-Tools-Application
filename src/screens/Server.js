import { useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import netHandler from '../utils/connection'
import { NetworkInfo } from 'react-native-network-info'

const ServerScreen = ({ navigation }) => {
    const [server, setServer] = useState(null)
    const [chats, setChats] = useState([])
    const [ip, setIp] = useState('')

    return <View>
        {ip.length > 0 ? <Text>Server Screen: {ip}</Text> : <Text>Server Screen</Text>}
        <Button title="Start Server" onPress={async () => {
            if (!server)
                setServer(netHandler.createServer(chats, setChats))
            try {
                let tempIp = await NetworkInfo.getIPV4Address()
                setIp(tempIp)
            } catch (e) {
                console.log(e.message)
            }
        }} />
        <Button title="Stop Server" onPress={() => {
            if (server) {
                server.close()
                setServer(null)
            }
        }} />
        <Button title="Go to Client Screen" onPress={() => navigation.navigate('Client')} />
        {server ? <Text>Server is on</Text> : null}
        <FlatList
            data={chats}
            renderItem={({ item }) => {
                return <Text style={{ margin: 10, fontSize: 20 }}>{item.msg}</Text>
            }}
            keyExtractor={item => item.id}
        />
    </View>
}


export default ServerScreen
