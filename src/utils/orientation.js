import { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

const useOrientation = () => {
    const { width, height } = Dimensions.get('window')
    const [orientation, setOrientation] = useState(width > height)

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            'change',
            ({ window: { width, height } }) => {
                if (width < height) {
                    setOrientation(false)
                } else {
                    setOrientation(true)
                }
            }
        )
        return () => subscription.remove()
    }, [])

    return orientation
}

export default useOrientation
