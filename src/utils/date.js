
const addZeroPrefixIfNeeded = (strToModify) => (strToModify.length === 1 ? `0${strToModify}` : strToModify)

export const normalizeDate = (dateToNormalize, shouldDisplayWithTime = true) => {
  const normalizedDate = new Date(dateToNormalize)
  let day = normalizedDate.getDate().toString()
  day = addZeroPrefixIfNeeded(day)
  let month = (normalizedDate.getMonth() + 1).toString()
  month = addZeroPrefixIfNeeded(month)
  const year = normalizedDate.getFullYear().toString()
  let hours = normalizedDate.getHours().toString()
  hours = addZeroPrefixIfNeeded(hours)
  let minutes = normalizedDate.getMinutes().toString()
  minutes = addZeroPrefixIfNeeded(minutes)

  if (!isNaN(day) && !isNaN(month) && !isNaN(year) && !isNaN(hours) && !isNaN(minutes)) return shouldDisplayWithTime ? `${day}-${month}-${year}, ${hours}:${minutes}` : `${day}-${month}-${year}`
  return 'date is not valid'
}

export const calculateDiffBetweenDates = (d1) => {
  const currentDate = new Date()
  let date1 = new Date(d1)
  let diffInTime = date1.getTime() - currentDate.getTime()
  diffInTime = diffInTime / (1000 * 3600 * 24)
  return Math.floor(diffInTime)
}
