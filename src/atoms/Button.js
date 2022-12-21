import { Dimensions, TouchableHighlight } from 'react-native'
import { Box, Text, useToken } from 'native-base'
import useOrientation from '../utils/orientation'

const Button = (props) => {
    const isLandscape = useOrientation()
    const disabled = props.disabled || false
    const [blue50, blue200, gray200] = useToken('colors', [
        'primary.blue.50',
        'primary.blue.200',
        'primary.gray.200',
    ])
    const { height } = Dimensions.get('window')
    const colouredButton = {
        linearGradient: {
            colors: [blue50, blue200],
            start: [0, 0],
            end: [1, 1],
        },
    }

    return (
        <TouchableHighlight
            underlayColor="#FFFFFF"
            activeOpacity={0.8}
            style={[
                {
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 40,
                    shadowOpacity: 0.2,
                    shadowOffset: { width: 4, height: 4 },
                },
                props.style,
            ]}
            onPress={props.onPress}
        >
            <Box
                bg={disabled ? gray200 : colouredButton}
                flex={1}
                px={{
                    base: 0,
                    md: isLandscape ? 0 : 9,
                }}
                py={{
                    base: 1.5,
                    sm: 2,
                    md: 2,
                    lg: isLandscape ? 2 : 2,
                    xl: isLandscape ? 2 : 2,
                }}
                alignItems="center"
                justifyContent="center"
                rounded="full"
            >
                {props.children ? (
                    props.children
                ) : (
                    <Text
                        color="white"
                        fontSize={{
                            base: height > 900 ? 'xl' : 'md',
                            sm: isLandscape ? 'md' : 'xl',
                            md: isLandscape ? 'md' : 'xl',
                            lg: isLandscape ? '2xl' : '2xl',
                            xl: isLandscape ? '3xl' : '2xl',
                        }}
                        fontWeight="600"
                    >
                        {props.text}
                    </Text>
                )}
            </Box>
        </TouchableHighlight>
    )
}

export default Button
