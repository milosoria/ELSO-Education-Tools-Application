import fontSizes from '../utils/font-sizes'
import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import { Text, TouchableHighlight, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Button = ({
    navigation,
    screen,
    text,
    containerStyles = {},
    textStyles = {},
}) => {
    const styles = create({
        button: {
            alignItems: 'center',
            alignSelf: 'flex-end',
            borderRadius: 40,
            paddingHorizontal: '10%',
            paddingVertical: '2%',
        },
        buttonText: {
            color: colors.primary.white,
            fontSize: fontSizes.large,
            fontFamily: 'SFPro-Medium',
            paddingHorizontal: '6%',
            paddingVertical: '2%',
        },
    })
    return (
        <View style={containerStyles}>
            <TouchableHighlight
                underlayColor="#FFFFFF"
                activeOpacity={0.8}
                style={{
                    alignSelf: 'flex-end',
                    borderRadius: 40,
                    shadowOpacity: 0.2,
                    shadowOffset: { width: 4, height: 4 },
                }}
                onPress={() => navigation.navigate(screen)}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.button}
                    colors={[
                        colors.primary.blue,
                        colors.secondary.blueGradient,
                    ]}
                >
                    <Text style={[styles.buttonText, textStyles]}>{text}</Text>
                </LinearGradient>
            </TouchableHighlight>
        </View>
    )
}

export default Button
