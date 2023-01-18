import {
    Dimensions,
    ImageBackground,
    Platform,
    SafeAreaView,
} from 'react-native'
import { create } from '../../utils/normalize'
import { Button, Text } from '../../atoms/'
import useOrientation from '../../utils/orientation'
import { Box, HStack, VStack, useBreakpointValue, useToken } from 'native-base'

//FIXME: Simulators are still using view and react native components, and use maxDimension and minDimension
const SIMULATORS = [
    {
        id: '1',
        name: 'PDB',
        description: 'Pressure display box',
        imagePath: require('../../assets/carousel/pdb.png'),
    },
    {
        id: '2',
        name: 'Blender',
        description: 'Air-oxygen mixer',
        imagePath: require('../../assets/carousel/blender.png'),
    },
]

const Simulators = ({ navigation }) => {
    const { isPad } = Platform
    const [black50] = useToken('colors', ['primary.black.50'])
    const { height } = Dimensions.get('window')
    const isLandscape = useOrientation()
    const imageHeight = useBreakpointValue({
        base: '45%',
        lg: isLandscape ? '40%' : '45%',
        xl: isLandscape ? '40%' : '45%',
    })
    const itemHeight = useBreakpointValue({
        base: '35%',
        sm: isLandscape ? 280 : 340,
        md: isLandscape ? 300 : 350,
        lg: isLandscape ? 300 : 450,
        xl: isLandscape ? 400 : 450,
    })
    const itemWidth = useBreakpointValue({
        base: '85%',
        sm: isLandscape ? 200 : 260,
        md: isLandscape ? 230 : 280,
        lg: isLandscape ? 280 : 350,
        xl: isLandscape ? 350 : 350,
    })
    const styles = create({
        container: {
            backgroundColor: black50,
            flex: 1,
        },
        info: {
            height: imageHeight,
            backgroundColor: black50,
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
    })
    const Stack = isPad ? HStack : VStack
    const Item = ({ name, description, imagePath }) => (
        <ImageBackground
            style={styles.item}
            imageStyle={styles.background}
            source={imagePath}
        >
            <VStack
                pb={{
                    base: 6,
                    sm: isLandscape ? 4 : 6,
                    md: isLandscape ? 1 : 6,
                    lg: isLandscape ? 4 : 8,
                    xl: isLandscape ? 5 : 8,
                }}
                space={{
                    base: '20%',
                    sm: isLandscape ? 1 : 2,
                    md: isLandscape ? 1 : 3,
                    lg: isLandscape ? 1 : 4,
                    xl: isLandscape ? 3 : 4,
                }}
                flexDirection="column-reverse"
                alignItems={isPad ? 'flex-start' : 'center'}
                flex={1}
            >
                <Button
                    style={{
                        width: isPad ? '60%' : '50%',
                        marginTop: isPad ? 10 : 0,
                    }}
                    onPress={() => navigation.navigate(name)}
                    text="Continue"
                />
                <Box
                    alignItems={isPad ? 'flex-start' : 'center'}
                    pl={isPad ? '6%' : '0%'}
                >
                    <Text
                        type="title"
                        base={height > 900 ? '4xl' : '3xl'}
                        text={name}
                        fontWeight="600"
                    />
                    <Text
                        type="description"
                        fontWeight={'400'}
                        text={description}
                    />
                </Box>
            </VStack>
        </ImageBackground>
    )

    return (
        <SafeAreaView style={styles.container}>
            {isPad && (
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
                            type="description"
                            text="Scroll and select a simulator"
                        />
                        <Text type="large title" text="Simulations" />
                    </VStack>
                </ImageBackground>
            )}
            <Stack
                width="100%"
                flexDirection={isPad ? 'row' : 'column'}
                alignItems="center"
                mt={isPad ? (isLandscape ? '2%' : '5%') : 0}
                justifyContent={isLandscape ? 'center' : 'space-evenly'}
                space={isPad ? (isLandscape ? '5%' : 0) : 5}
                horizontal={isPad}
            >
                {!isPad && (
                    <VStack mt={4} space={2} width={itemWidth}>
                        <Text type="large title" text="ECMO Simulators" />
                        <Text
                            type="title"
                            fontWeight="400"
                            text="Scroll and select a simulator"
                        />
                    </VStack>
                )}
                {SIMULATORS.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </Stack>
        </SafeAreaView>
    )
}

export default Simulators
