export const getDateString = (timestamp) => {
  const date = new Date(timestamp)

  const dateString = date.toLocaleDateString('en-GB')
  const timeString = date.toLocaleTimeString('en-GB')

  return `${dateString} ${timeString}`
}
