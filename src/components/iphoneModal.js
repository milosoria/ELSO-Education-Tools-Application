import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import { Linking, Text, TouchableHighlight, View } from 'react-native'
import fontSizes from '../utils/font-sizes'

const Modal = () => {
    const handlePress = () => {
        Linking.openURL('https://www.elso.org/default.aspx')
    }
    const styles = create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        iphoneModal: {
            backgroundColor: colors.primary.background,
            borderRadius: 40,
            width: '80%',
            height: '60%',
            flexDirection: 'column',
        },
        modalTitle: {
            alignSelf: 'flex-start',
            top: '6%',
            left: '8%',
            fontSize: fontSizes.titles,
            fontWeight: '600',
        },
        modalText: {
            alignSelf: 'flex-start',
            marginRight: '20%',
            top: '8%',
            left: '8%',
            fontSize: 20,
            fontWeight: '400',
        },
        shadowWrap: {
            alignSelf: 'center',
            top: '35%',
            height: '10%',
            width: '50%',
            justifyContent: 'center',
            borderRadius: 40,
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
        },
        modalButton: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primary.blue,
            borderRadius: 40,
        },
        modalButtonText: {
            fontSize: fontSizes.body,
            fontWeight: '600',
            color: 'white',
            paddingHorizontal: '15%',
        },
    })
    return (
        <View style={styles.container}>
            <View style={styles.iphoneModal}>
                <Text numberOfLines={2} style={styles.modalTitle}>
                    App not
                    {'\n'}
                    available!
                </Text>
                <Text numberOfLines={3} style={styles.modalText}>
                    This app was designed and intended to be used on iPad
                    devices
                </Text>
                <TouchableHighlight
                    underlayColor="#FFFFFF"
                    activeOpacity={0.8}
                    style={styles.shadowWrap}
                    onPress={handlePress}
                >
                    <View style={styles.modalButton}>
                        <Text style={styles.modalButtonText}>Go to ELSO</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Modal
