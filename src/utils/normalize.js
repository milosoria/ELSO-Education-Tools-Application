import { Dimensions, PixelRatio } from 'react-native'

const { width } = Dimensions.get('window')

const scaleFont = width / 320

/**
 * Normalize Font Size respect to window width with the scale width:320
 * @param {number} size
 */
export const normalizeFontSize = (size) => {
    const newSize = size * scaleFont
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

const scaleWidth = width / 420

/**
 * Normalize px respect to window width with the scale width:420
 * @param {number, string} size
 */
export const normalizePx =(size) => {
    if (typeof size === 'string') {
        return size
    }
    const newSize = size * scaleWidth
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
}
