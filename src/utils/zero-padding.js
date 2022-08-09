const zeroPad = (num) => {
    if (num == 0) {
        return '-000'
    } else if (num < 0) {
        return '-' + String(-1*num).padStart(3, '0')
    } else {
        return '+' + String(num).padStart(3, '0')
    }
    
}

export default zeroPad
