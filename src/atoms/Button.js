import colors from '../utils/color-palette'
import { TouchableHighlight } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Button = (props) => {
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
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                    flex: 1,
                    borderRadius: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                colors={[colors.primary.blue, colors.secondary.blueGradient]}
            >
                {props.children}
            </LinearGradient>
        </TouchableHighlight>
    )
}

export default Button
