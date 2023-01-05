import { Dimensions } from 'react-native'
import { Button } from '../atoms'
import Icon from 'react-native-vector-icons/AntDesign'
import { useToken } from 'native-base'

const IPhoneButton = (props) => {
    const { height } = Dimensions.get('window')
    const [gray50] = useToken('colors', ['primary.gray.50'])

    return (
        <Button
            {...props}
            style={[
                {
                    left: '20%',
                    width: '18%',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                props.style,
            ]}
        >
            <Icon
                name="arrowright"
                size={height > 900 ? 25 : 23}
                style={{
                    color: gray50,
                    alignSelf: 'center',
                }}
            />
        </Button>
    )
}

export default IPhoneButton
