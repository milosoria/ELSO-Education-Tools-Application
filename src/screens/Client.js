import { useEffect, useState } from 'react'
import { Button, FlatList, Text, TextInput, View } from 'react-native'
import * as Network from 'expo-network'
import netHandler from '../utils/connection'



const Client = () => {

    const [client, setClient] = useState(null)
    const [chats,] = useState([])

    useEffect(() => {
        const configClient = async () => {
            let ip = await Network.getIpAddressAsync()
            console.log('Client ip is:', ip)
            setClient(netHandler.createClient(ip))
        }
        configClient()
    }, [])

    return (
        <View>
            <Text>Client Screen</Text>
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
