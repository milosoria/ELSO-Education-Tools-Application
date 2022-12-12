import { Linking } from 'react-native'
import { Button } from '../atoms'
import { Box, Text, VStack } from 'native-base'

const Modal = () => {
    const handlePress = () => {
        Linking.openURL('https://www.elso.org/default.aspx')
    }
    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <VStack
                space={8}
                bg="primary.gray.100"
                p={10}
                rounded="3xl"
                width="85%"
                height="60%"
            >
                <Text
                    alignSelf="flex-start"
                    color="primary.black.100"
                    lineHeight="sm"
                    fontSize={{
                        base: '4xl',
                        lg: '2xl',
                        xl: '2xl',
                    }}
                    fontWeight="700"
                >
                    App not
                    {'\n'}
                    available!
                </Text>
                <Text
                    alignSelf="flex-start"
                    color="primary.black.100"
                    lineHeight="sm"
                    fontSize={{
                        base: '2xl',
                        lg: '2xl',
                        xl: '2xl',
                    }}
                    fontWeight="400"
                >
                    This app was designed and intended to be used on iPad
                    devices
                </Text>
                <Button
                    style={{
                        top: 10,
                        width: '80%',
                    }}
                    text="Go to ELSO"
                    onPress={handlePress}
                />
            </VStack>
        </Box>
    )
}

export default Modal
