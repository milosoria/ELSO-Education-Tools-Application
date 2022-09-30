import { useEffect, useState } from 'react'
import { Button, FlatList, Text, TextInput, View } from 'react-native'
import { NetworkInfo } from 'react-native-network-info'
import netHandler from '../utils/connection'



const Client = () => {

    const [client, setClient] = useState(null)
    const [chats,] = useState([])
    const [ip, setIp] = useState('')

    useEffect(() => {
        const configClient = async () => {
            try {
                let ip = await NetworkInfo.getIPV4Address()
                console.log('Client ip is:', ip)
                if (!client) setClient(netHandler.createClient(ip))
                setIp(ip)
            } catch (e) {
                console.log(e.message)
            }
        }
        configClient()
    }, [])

    return (
        <View>
            {ip.length > 0 ? <Text>Client Screen: {ip}</Text> : <Text>Client Screen No ip yet</Text>}
            <Button title="Stop Client" onPress={() => {
                if (client) {
                    client.destroy()
                    setClient(null)
                }
            }} />
            {client ? <Text>Client is on</Text> : null}
            <FlatList
                data={chats}
                renderItem={({ item }) => {
                    return <Text style={{ margin: 10, fontSize: 20 }}>{item.msg}</Text>
                }}
                keyExtractor={item => item.id}
            />
            <TextInput placeholder="Enter a number" placeholderTextColor="black" style={{ margin: 10, borderWidth: 2, color: 'black' }} onSubmitEditing={
                ({ nativeEvent: { text } }) => {
                    if (client) {
                        client.write(JSON.stringify({ msg: text, id: 1 }))
                    }
                }} />
        </View>
    )
}



export default Client
