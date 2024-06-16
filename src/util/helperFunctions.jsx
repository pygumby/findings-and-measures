export const getDateString = (timestamp) => {
  return new Date(timestamp).toLocaleDateString('en-GB')
}

export const getTimeString = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString('en-GB')
}
