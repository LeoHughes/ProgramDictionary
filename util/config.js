export default function(){

  //配置数据源
  const config = {
    syncURL: 'https://dictionary.wilddogio.com'
  };
  wilddog.initializeApp(config);
  const ref = wilddog.sync().ref('/words');

  return ref;

}

