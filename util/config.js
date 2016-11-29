//配置数据源
const config = {
  authDomain: "dictionary.wilddogio.com",
  syncURL: 'https://dictionary.wilddogio.com'
};

//应用初始化
wilddog.initializeApp(config);

//获取应用实例
const getWilddog = function(){
  return wilddog;
}

//获取Reference
const getRef = function(){
  const ref = wilddog.sync().ref('/words');
  return ref;
}


export {getWilddog,getRef}
