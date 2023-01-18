import { Dimensions, TouchableHighlight } from 'react-native'
import Text from './Text'
import { Box, useToken } from 'native-base'
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
                    justifyContent: 'center',
                    borderRadius: 40,
                    shadowOpacity: 0.2,
                    shadowOffset: { width: 4, height: 4 },
                    maxWidth: 300,
                },
                props.style,
            ]}
            onPress={props.onPress}
        >
            <Box
                bg={disabled ? gray200 : colouredButton}
                flex={1}
                py={{
                    base: 2,
                    sm: 2,
                    md: 2,
                    lg: isLandscape ? 2 : 2,
                    xl: 3,
                }}
                alignItems="center"
                justifyContent="center"
                rounded="full"
            >
                {props.children ? (
                    props.children
                ) : (
                    <Text type="subtitle" fontWeight="600" text={props.text} />
                )}
            </Box>
        </TouchableHighlight>
    )
}

export default Button
