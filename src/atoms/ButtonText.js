import { Text } from 'react-native'
import colors from '../utils/color-palette'
import fontSizes from '../utils/font-sizes'

const ButtonText = (props) => {
    return (
        <Text
            style={[
                {
                    color: colors.primary.white,
                    fontSize: fontSizes.body,
                    fontFamily: 'SFPro-Medium',
                },
                props.style,
            ]}
        >
            {props.text}
        </Text>
    )
}
export default ButtonText
