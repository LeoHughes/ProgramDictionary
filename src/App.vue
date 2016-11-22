<template lang="pug">
  section.app-container
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
  font-family: @font;
  font-size: 14px;
  overflow: hidden;

  #app{
    width: 100%;
    height: 100%;
    background: @blue;

    .app-container{
      width: auto;
      height: auto;
    }

  }

}

@media screen and (min-width:1024px){
  html,body{
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(right bottom,@white,@blue);
    background: linear-gradient(to right bottom,@white,@blue);

    #app{
      width: 1024px;
      height: 90%;
      margin: 2.5% auto;
      border-radius: 5px;
    }

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
