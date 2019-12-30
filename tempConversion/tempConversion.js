const ftoc = function(tempF) {
  tempC =  (tempF - 32) * 5/9
  let rounded = Math.round( tempC * 10 ) / 10
  return rounded 
    
}

const ctof = function(tempC) {
  tempF = tempC * 9/5 + 32
  let rounded = Math.round( tempF * 10 ) / 10
  return rounded
}

module.exports = {
  ftoc,
  ctof
}
