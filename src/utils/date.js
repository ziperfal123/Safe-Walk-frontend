
const addZeroPrefixIfNeeded = (strToModify) => (strToModify.length === 1 ? `0${strToModify}` : strToModify)

export const normalizeDate = (dateToNormalize, shouldDisplayWithTime = true) => {
  const normalizedDate = new Date(dateToNormalize)
  let day = normalizedDate.getDate().toString()
  day = addZeroPrefixIfNeeded(day)
  let month = (normalizedDate.getMonth() + 1).toString()
  month = addZeroPrefixIfNeeded(month)
  const year = normalizedDate.getFullYear().toString()
  let hours = normalizedDate.getUTCHours().toString()
  hours = addZeroPrefixIfNeeded(hours)
  let minutes = normalizedDate.getUTCMinutes().toString()
  minutes = addZeroPrefixIfNeeded(minutes)

  if (!isNaN(day) && !isNaN(month) && !isNaN(year) && !isNaN(hours) && !isNaN(minutes)) return shouldDisplayWithTime ? `${day}-${month}-${year}, ${hours}:${minutes}` : `${day}-${month}-${year}`
  return 'date is not valid'
}
