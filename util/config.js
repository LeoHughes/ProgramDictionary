//配置数据源
const config = {
  authDomain: "dictionary.wilddogio.com",
  syncURL: 'https://dictionary.wilddogio.com'
}

//应用初始化
wilddog.initializeApp(config)

//获取应用实例
const getWilddog = () => {
  return wilddog
}

//获取词条Reference
const getRef = () => {
  return wilddog.sync().ref('/words')
}

//获取作者Reference
const getAuthorRef = () => {
  return wilddog.sync().ref('/author')
}


export { getWilddog, getRef, getAuthorRef }
