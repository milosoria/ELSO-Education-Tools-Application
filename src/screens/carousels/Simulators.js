import { ImageBackground, SafeAreaView, ScrollView } from 'react-native'
import { create } from '../../utils/normalize'
import { Button } from '../../atoms/'
import useOrientation from '../../utils/orientation'
import { Box, Text, VStack, useBreakpointValue, useToken } from 'native-base'

const SIMULATORS = [
    {
        id: '1',
        name: 'Blender',
        description: 'Air-oxygen mixer simulator',
        imagePath: require('../../assets/carousel/blender.png'),
    },
    {
        id: '2',
        name: 'PDB',
        description: 'Pressure display box simulator',
        imagePath: require('../../assets/carousel/pdb.png'),
    },
]

const Simulators = ({ navigation }) => {
    const [darkBg] = useToken('colors', ['primary.black.50'])
    const isLandscape = useOrientation()
    const itemHeight = useBreakpointValue({
        base: isLandscape ? 280 : 320,
        md: isLandscape ? 300 : 350,
        lg: isLandscape ? 300 : 450,
        xl: isLandscape ? 400 : 450,
    })
    const itemWidth = useBreakpointValue({
        base: isLandscape ? 200 : 250,
        md: isLandscape ? 230 : 280,
        lg: isLandscape ? 280 : 350,
        xl: isLandscape ? 350 : 350,
    })
    const styles = create({
        container: {
            backgroundColor: darkBg,
            flex: 1,
        },
        info: {
            height: '40%',
            backgroundColor: darkBg,
        },
        item: {
            borderRadius: 10,
            width: itemWidth,
            height: itemHeight,
            shadowOpacity: 0.2,
            shadowOffset: { height: 4, width: 4 },
        },
        background: {
            height: '100%',
            width: '100%',
            borderRadius: 8,
            resizeMode: 'cover',
        },
        listView: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
    })
    const Item = ({ name, description, imagePath }) => (
        <ImageBackground
            style={styles.item}
            imageStyle={styles.background}
            source={imagePath}
        >
            <VStack
                pb={{
                    base: isLandscape ? 4 : 6,
                    md: isLandscape ? 1 : 6,
                    lg: isLandscape ? 4 : 8,
                    xl: isLandscape ? 5 : 8,
                }}
                pl={5}
                space={{
                    base: isLandscape ? 1 : 2,
                    md: isLandscape ? 1 : 3,
                    lg: isLandscape ? 1 : 4,
                    xl: isLandscape ? 3 : 4,
                }}
                flexDirection="column-reverse"
                flex={1}
            >
                <Button
                    style={{
                        width: '55%',
                    }}
                    onPress={() => navigation.navigate(name)}
                    text="Continue"
                />
                <Box ml={2.5} mb={2}>
                    <Text
                        fontFamily="body"
                        color="white"
                        lineHeight="sm"
                        fontSize={{
                            base: isLandscape ? '3xl' : '3xl',
                            md: isLandscape ? '3xl' : '4xl',
                            lg: isLandscape ? '3xl' : '4xl',
                            xl: isLandscape ? '4xl' : '5xl',
                        }}
                        fontWeight="600"
                    >
                        {name}
                    </Text>
                    <Text
                        fontFamily="body"
                        color="white"
                        lineHeight="sm"
                        fontSize={{
                            base: isLandscape ? 'lg' : 'lg',
                            md: isLandscape ? 'xl' : 'xl',
                            lg: isLandscape ? 'xl' : '2xl',
                            xl: isLandscape ? '2xl' : '5xl',
                        }}
                        fontWeight="300"
                    >
                        {description}
                    </Text>
                </Box>
            </VStack>
        </ImageBackground>
    )

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/navigation/simulators.png')}
                imageStyle={{ height: '100%', opacity: 0.8 }}
                style={styles.info}
            >
                <VStack
                    space={1}
                    pl={10}
                    pb={10}
                    flex={1}
                    flexDirection="column-reverse"
                >
                    <Text
                        fontFamily="body"
                        color="white"
                        lineHeight="sm"
                        fontSize={{
                            base: isLandscape ? 'lg' : 'lg',
                            md: isLandscape ? 'xl' : 'xl',
                            lg: isLandscape ? 'xl' : '2xl',
                            xl: isLandscape ? '2xl' : '5xl',
                        }}
                        fontWeight="300"
                    >
                        Scroll and select a simulator
                    </Text>
                    <Text
                        fontFamily="body"
                        color="white"
                        lineHeight="sm"
                        fontSize={{
                            base: isLandscape ? '3xl' : '3xl',
                            md: isLandscape ? '3xl' : '4xl',
                            lg: isLandscape ? '3xl' : '5xl',
                            xl: isLandscape ? '4xl' : '5xl',
                        }}
                        fontWeight="600"
                    >
                        Simulations
                    </Text>
                </VStack>
            </ImageBackground>
            <ScrollView contentContainerStyle={styles.listView} horizontal>
                {SIMULATORS.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Simulators
