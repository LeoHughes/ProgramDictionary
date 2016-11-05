<template lang="pug">
  #app
    Head_(:title="name")
    Search
</template>

<style lang="less">
@import './assets/variable.less';

html,body{
  margin: 0 0;
  padding: 0 0;
  width: 100%;
  height: 100%;
  font-family: cursive ,"Microsoft Yahei" , sans-serif;
  font-size: 14px;
  overflow: hidden;

  #app{
    width: 100%;
    height: 100%;
    background: @blue;
  }

}
</style>

<script>
import Head_ from './components/Head_/Head_'
import Search from './components/Search/Search'

export default {
  name: 'app',
  components:{
    Head_,
    Search
  },
  data() {
    return {
      name: 'Dictionary'
    }
  }
}
</script>
