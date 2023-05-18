import {
  run,
  setNumbersCount,
  setAction,
  setResultMessageGetter
} from "./miniFramework.js"

setAction((numbers) => {
  const [ a, pow ] = numbers
  return a ** pow
})
setResultMessageGetter(res => 'a^b = ' + res)
setNumbersCount(2)
run()