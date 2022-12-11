import { extendTheme } from 'native-base'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const colors = {
    primary: {
        blue: {
            50: '#4F94E4', // primary.blue
            100: '#3E90F0', // secondary.blue
            200: '#2178DC', // tertiary.blue
        },
        gray: {
            50: '#FCFCFC', // primary.white
            100: '#F2F2F2', // primary.background
            200: '#C1C1C1', // secondary.disabled
            300: '#ABABAB', // primary.gray
        },
        black: {
            50: '#32363F', // primary.darkBackground
            100: '#1F242D', //primary.darkHeader
            200: '#181818', // primary.black
        },
    },
}

const fonts = {
    fontConfig: {
        SFPro: {
            100: 'SFPro-Light',
            200: 'SFPro-Medium',
            300: 'SFPro-Regular',
            400: 'SFPro-Semibold',
            500: 'SFPro-Bold',
            600: 'SFPro-Heavy',
        },
        fonts: {
            heading: 'SFPro',
            body: 'SFPro',
            mono: 'SFPro',
        },
    },
}

export default extendTheme({ config, colors, fonts })
