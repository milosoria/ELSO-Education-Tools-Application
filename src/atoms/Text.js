import { Dimensions } from 'react-native'
import { Text as NBText } from 'native-base'
import useOrientation from '../utils/orientation'

//TODO: finish this and replace every text with this component for coherent styling
const Text = (props) => {
    const isLandscape = useOrientation()
    const { height } = Dimensions.get('window')
    const { type, base } = props
    let fontSize
    let fontWeight
    if (type == 'large title') {
        fontSize = {
            base: height > 900 ? '4xl' : '3xl',
            sm: isLandscape ? '3xl' : '4xl',
            md: isLandscape ? '3xl' : '4xl',
            lg: isLandscape ? '3xl' : '5xl',
            xl: isLandscape ? '4xl' : '5xl',
        }
        fontWeight = '600'
    } else if (type == 'title') {
        fontSize = {
            base: height > 900 ? '2xl' : 'xl',
            sm: '3xl',
            md: '3xl',
            lg: '4xl',
            xl: '4xl',
        }
        fontWeight = '600'
    } else if (type == 'subtitle') {
        fontSize = {
            base: height > 900 ? 'md' : 'md',
            sm: 'xl',
            md: 'xl',
            lg: isLandscape ? 'xl' : '2xl',
            xl: isLandscape ? '2xl' : 'xl',
        }
        fontWeight = '400'
    } else if (type == 'description') {
        fontSize = {
            base: height > 900 ? 'lg' : 'md',
            sm: isLandscape ? 'lg' : 'lg',
            md: isLandscape ? 'xl' : 'xl',
            lg: isLandscape ? 'xl' : '2xl',
            xl: isLandscape ? '2xl' : '5xl',
        }
        fontWeight = '400'
    } else if (type == 'small') {
        fontSize = {
            base: 'xs',
            sm: 'md',
            md: 'md',
            lg: 'xl',
        }
        fontWeight = '400'
    }
    if (base) {
        fontSize.base = base
    }
    return (
        <NBText
            color="white"
            lineHeight="sm"
            fontSize={fontSize}
            fontWeight={fontWeight}
            {...props}
        >
            {props.text}
        </NBText>
    )
}

export default Text
