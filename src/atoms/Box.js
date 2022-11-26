import { View } from 'react-native'

const Box = (props) => {
    return (
        <View
            {...props}
            style={{ alignItems: 'center', justifyContent: 'center' }}
        >
            {props.children}
        </View>
    )
}

export default Box
