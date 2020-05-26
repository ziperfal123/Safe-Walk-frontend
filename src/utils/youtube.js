export function urlToEmbededUrlConvertor(urlToConvert) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = urlToConvert.match(regExp)
  return (match && match[2].length === 11)
    ? match[2]
    : null
}