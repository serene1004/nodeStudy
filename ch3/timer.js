const timeout = setTimeout(() => {
  console.log('1.5초후 실행')
}, 1500)

const interval = setInterval(() => {
  console.log('1초마다 실행')
}, 1000)

const timeout2 = setTimeout(() => {
  console.log('실행안될꺼야')
}, 3000)

setTimeout(() => {
  clearTimeout(timeout2)
  clearInterval(interval)
}, 2500)

const immediate = setImmediate(() => {
  console.log('즉시실행할꺼야')
})
const immediate2 = setImmediate(() => {
  console.log('즉시실행안될꺼야')
})
clearImmediate(immediate2)