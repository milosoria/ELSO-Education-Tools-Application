import { View } from 'react-native'

const Box = (props) => {
    return (
        <View
            style={[
                {
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                props.style,
            ]}
        >
            {props.children}
        </View>
    )
}

export default Box
