export const normalizeDate = dateToNormalize => {
    let normalizedDate = new Date(dateToNormalize)
    const day = normalizedDate.getDate()
    const month = normalizedDate.getMonth()
    const year = normalizedDate.getFullYear()
    normalizedDate = `${day}-${month}-${year}`
    return normalizedDate
}