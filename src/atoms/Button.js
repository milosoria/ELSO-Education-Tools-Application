import { TouchableHighlight } from 'react-native'
import { Box, Text } from 'native-base'
import useOrientation from '../utils/orientation'

const Button = (props) => {
    const isLandscape = useOrientation()
    const disabled = props.disabled || false
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
            <Box
                bg={
                    disabled
                        ? 'primary.gray.200'
                        : {
                              linearGradient: {
                                  colors: [
                                      'primary.blue.50',
                                      'primary.blue.200',
                                  ],
                                  start: [0, 0],
                                  end: [1, 1],
                              },
                          }
                }
                flex={1}
                px={{
                    base: isLandscape ? 0 : 9,
                }}
                py={{
                    base: isLandscape ? 0 : 1,
                    lg: isLandscape ? 0.5 : 1,
                    xl: isLandscape ? 0.5 : 2,
                }}
                alignItems="center"
                justifyContent="center"
                rounded="full"
            >
                {props.children ? (
                    props.children
                ) : (
                    <Text
                        color="white"
                        fontSize={{
                            base: isLandscape ? 'md' : 'xl',
                            lg: isLandscape ? '2xl' : '2xl',
                            xl: isLandscape ? '3xl' : '2xl',
                        }}
                        fontWeight="600"
                    >
                        {props.text}
                    </Text>
                )}
            </Box>
        </TouchableHighlight>
    )
}

export default Button
