import { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import netHandler from '../utils/connection'
import { Box, Button, ButtonText } from '../atoms'
import fontSizes from '../utils/font-sizes'

const Server = () => {
    const [server, setServer] = useState(null)
    const [chats, setChats] = useState([])

    const handleStartServer = async () => {
        try {
            if (!server) setServer(netHandler.createServer(setChats))
        } catch (e) {
            console.log(e.message)
        }
    }

    const handleStopServer = () => {
        if (server) {
            server.close()
            setServer(null)
            setChats([])
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
                    Server Screen
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
                            marginRight: '5%',
                        }}
                        onPress={handleStartServer}
                    >
                        <ButtonText text="Start Server" />
                    </Button>
                    <Button
                        style={{
                            marginLeft: '5%',
                        }}
                        onPress={handleStopServer}
                    >
                        <ButtonText text="Stop Server" />
                    </Button>
                </View>
                {server ? (
                    <Text
                        style={{
                            marginTop: '2.5%',
                            fontSize: fontSizes.body,
                        }}
                    >
                        {' '}
                        Server listening for messages!
                    </Text>
                ) : null}
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

export default Server
