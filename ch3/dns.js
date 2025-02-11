import dns from 'dns/promises'

const ip = await dns.lookup('naver.com')
console.log('ip', ip)

const a = await dns.resolve('naver.com', 'A')
console.log('A', a)

const mx = await dns.resolve('naver.com', 'MX')
console.log('MX', mx)

const cname = await dns.resolve('www.naver.com', 'CNAME')
console.log('CNAME', cname)

const any = await dns.resolve('www.naver.com', 'ANY')
console.log('ANY', any)