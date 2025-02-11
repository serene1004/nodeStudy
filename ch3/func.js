// const value = require('./var')

// 구조분해 할당을 통해 아래와같이 할당 가능하다.
const { odd, even } = require('./var')
// console.log(odd, even)

const checkOddOrEven = (number) => {
  if (number % 2) {
    return odd
  } else {
    return even
  }
}

module.exports = checkOddOrEven