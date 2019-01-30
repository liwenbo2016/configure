export function isMobile (str) {
  return /^[1][3-9][0-9]{9}$/.test(str)
}
export function isNumber (str) {
  return /^[0-9]*$/.test(str)
}
