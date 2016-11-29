<template lang="pug">
transition(name="transition-animation")
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

  //隐藏滚动条
  ::-webkit-scrollbar
  {
  width: 0;
  height: 0;
  }

  #app{
    width: 100%;
    height: 100%;
    background: @blue;
    overflow-x: hidden;
    overflow-y: auto;

    //过渡效果
    .transition-animation-enter-active {
      animation: bounce-in .4s;
    }
    .transition-animation-leave-active {
      animation: bounce-out .4s;
    }
    @keyframes bounce-in {
      0% {
        transform: rotateY(90deg);
      }
      100% {
        transform: rotateY(0);
      }
    }
    @keyframes bounce-out {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    .app-container{
      width: auto;
      height: 100%;
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
      width: 700px;
      height: 90%;
      margin: 2.5% auto;
      border-radius: 5px;
      box-shadow: 0 0 10px #888;
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
