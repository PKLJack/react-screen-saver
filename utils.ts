function getTime(seconds = false, date = false) {
  const end = seconds ? 8 : 5 // include seconds or not

  const dateTimeStr = new Date().toISOString()
  const dateStr = dateTimeStr.split("T")[0]
  const timeStr = dateTimeStr.split("T")[1].slice(0, end)

  if (date) {
    return dateStr + " " + timeStr
  }
  return timeStr
}

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export { getTime, getRndInteger }
