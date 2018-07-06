// 默认都是正式环境的变量
let serverApiDomain = '//otc.coinex.com/api'
let clientApiDomain = '//otc.coinex.com/api'

let loginPage = '//www.coinex.com/account/signin'
let signupPage = '//www.coinex.com/account/signup'
let webDomain = '//otc.coinex.com'

let NODE_ENV = process.env.NODE_ENV || 'production'
let MODE = process.env.MODE || 'production'

// 非正式环境(pre & dev)
if (MODE !== 'production') {
  loginPage = '//test.coinex.com/account/signin'
  signupPage = '//test.coinex.com/account/signup'
}

// pre
if (MODE === 'pre') {
  webDomain = '//test.otc.coinex.com'
  clientApiDomain = '//test.otc.coinex.com/api'
  serverApiDomain = '//test.otc.coinex.com/api'
}

// 这个配置host到本地nginx之后就可以转发到想用的mock server了(localhost:4006)
if (MODE === 'development') {
  webDomain = '//dev.otc.coinex.com'
  clientApiDomain = '//dev.otc.coinex.com/api'
  serverApiDomain = '//dev.otc.coinex.com/api'
}

const protocol = process.client ? window.location.protocol : 'http:'

webDomain = protocol + webDomain
signupPage = protocol + signupPage
loginPage = protocol + loginPage
serverApiDomain = protocol + serverApiDomain
clientApiDomain = protocol + clientApiDomain

export {
  clientApiDomain,
  serverApiDomain,
  loginPage,
  signupPage,
  webDomain
}
