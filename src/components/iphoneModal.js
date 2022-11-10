import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import { Linking, Text, TouchableHighlight, View } from 'react-native'
import { useContext } from 'react'
import DimensionContext from '../contexts/dimensionContext'
import fontSizes from '../utils/font-sizes'

const IphoneModal = () => {
    const { maxDimension } = useContext(DimensionContext)
    const handlePress = () => {
        Linking.openURL('https://www.elso.org/default.aspx')
    }
    const styles = create({
        iphoneModal: {
            backgroundColor: colors.primary.background,
            marginTop: maxDimension * 0.1,
            borderRadius: 40,
            width: maxDimension * 0.35,
            height: maxDimension * 0.5,
        },
        modalTitle: {
            fontSize: fontSizes.titles,
            fontWeight: '600',
            marginRight: maxDimension * 0.04,
            marginLeft: maxDimension * 0.04,
            marginTop: maxDimension * 0.04,
        },
        modalText: {
            marginLeft: maxDimension * 0.04,
            marginRight: maxDimension * 0.04,
            marginTop: maxDimension * 0.03,
            fontSize: 20,
            fontWeight: '400',
        },
        modalButton: {
            alignItems: 'center',
            justifyContent: 'center',
            height: maxDimension * 0.05,
            width: maxDimension * 0.25,
            backgroundColor: colors.primary.blue,
            borderRadius: 40,
        },
        modalButtonText: {
            fontSize: fontSizes.body,
            fontWeight: '600',
            color: 'white',
        },
        shadowWrap: {
            alignSelf: 'center',
            marginTop: maxDimension * 0.2,
            height: maxDimension * 0.05,
            width: maxDimension * 0.25,
            borderRadius: 40,
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
        },
    })
    return (
        <View style={styles.iphoneModal}>
            <Text style={styles.modalTitle}>App not available!</Text>
            <Text style={styles.modalText}>
                This app was designed and intended to be used on iPad devices
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
    )
}

export default IphoneModal
