export const normalizeDate = dateToNormalize => {
    let normalizedDate = new Date(dateToNormalize)
    let day = normalizedDate.getDate().toString()
    day = addZeroPrefixIfNeeded(day)
    let month = normalizedDate.getMonth().toString()
    month = addZeroPrefixIfNeeded(month)
    const year = normalizedDate.getFullYear().toString()
    let hours = normalizedDate.getUTCHours().toString()
    hours = addZeroPrefixIfNeeded(hours)
    let minutes = normalizedDate.getUTCMinutes().toString()
    minutes = addZeroPrefixIfNeeded(minutes)

    normalizedDate = `${day}-${month}-${year}, ${hours}:${minutes}`
    return normalizedDate
}


const addZeroPrefixIfNeeded = strToModify => {
    if (strToModify.length === 1) {
        return '0' + strToModify
    }
    return strToModify
}