import { useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import { NetworkInfo } from 'react-native-network-info'
import { Box, Button, ButtonText } from '../atoms'
import netHandler from '../utils/connection'
import fontSizes from '../utils/font-sizes'

const Client = () => {
    const [client, setClient] = useState(null)
    const [chats, setChats] = useState([])
    const [ip, setIp] = useState('')

    const configClient = async () => {
        try {
            let ip = await NetworkInfo.getGatewayIPAddress()
            console.log('Client ip is:', ip)
            if (!client) setClient(netHandler.createClient(ip, setChats))
            setIp(ip)
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <View
            style={{
                justifyContent: 'center',
                bottom: '10%',
                flex: 1,
            }}
        >
            <Box>
                <Text
                    style={{
                        fontSize: fontSizes.titles,
                        marginBottom: '2%',
                    }}
                >
                    Client Screen
                </Text>
                <View
                    style={{
                        width: '40%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        style={{
                            width: '40%',
                            marginRight: '5%',
                        }}
                        onPress={configClient}
                    >
                        <ButtonText text="Connect" />
                    </Button>
                    <Button
                        style={{
                            width: '40%',
                            marginLeft: '5%',
                        }}
                        onPress={() => {
                            if (client) {
                                client.destroy()
                                setClient(null)
                            }
                        }}
                    >
                        <ButtonText text="Disconnect" />
                    </Button>
                </View>
                {client && ip ? (
                    <Text
                        style={{
                            fontSize: fontSizes.body,
                            marginTop: '2.5%',
                        }}
                    >
                        Client ip is: {ip}
                    </Text>
                ) : null}
                <TextInput
                    placeholder="Enter a message"
                    placeholderTextColor="black"
                    style={{
                        fontSize: fontSizes.body,
                        margin: 10,
                        borderWidth: 2,
                        color: 'black',
                        width: '30%',
                        height: '15%',
                    }}
                    onSubmitEditing={({ nativeEvent: { text } }) => {
                        if (client) {
                            client.write(JSON.stringify({ msg: text, id: 1 }))
                        }
                    }}
                />
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
        </View>
    )
}

export default Client
