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

    if (!isNaN(day) && !isNaN(month) && !isNaN(year) && !isNaN(hours) && !isNaN(minutes))
        return `${day}-${month}-${year}, ${hours}:${minutes}`;
    else
        return'date is not valid';
};


const addZeroPrefixIfNeeded = strToModify => {
    return strToModify.length === 1 ? `0${strToModify}` : strToModify
}