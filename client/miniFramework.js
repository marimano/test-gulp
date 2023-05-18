const MIN_NUMBER = 1
const MAX_NUMBER = 20

const readNumber = (numberName) => {
  const input = prompt('Enter number ' + numberName)
  if (isNumberValid(input, MIN_NUMBER, MAX_NUMBER)) {
    return +input
  }

  throw new Error('Invalid number')
}

const isNumberValid = (num, min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
    throw new Error('Invalid min or max')
  }

  return !isNaN(num) && min <= num && num <= max
}

const data = {
  numbers: [],
  numbersCount: 3,
  doAction: (numbers) => {
    return numbers.reduce((prevSum, currentNumber) => {
      return prevSum + currentNumber
    }, 0)
  },
  getResultMessage: result => 'Sum of numbers is ' + result
}

const run = () => {
  try {
    for (let i = 0; i < data.numbersCount; i++) {
      data.numbers.push(readNumber(i + 1))
    }
  }
  catch {
    alert('Invalid number')
    return
  }

  const result = data.doAction(data.numbers)

  alert(data.getResultMessage(result))
}

const setResultMessageGetter = (getMessage) => {
  if (typeof getMessage === 'function') {
    data.getResultMessage = getMessage
  }
}

const setAction = (doAction) => {
  if (typeof doAction === 'function') {
    data.doAction = doAction
  }
}

const setNumbersCount = (newCount) => {
  if (typeof newCount === 'number' && !isNaN(newCount) && newCount > 0) {
    data.numbersCount = newCount
  }
}

export {
  setAction,
  setResultMessageGetter,
  setNumbersCount,
  run
}