<template lang="pug">
transition(name="transition-animation")
  section.app-container
    Head_(:title="name")
    Search(:wordsCount="count")
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
  background-color: @gray;
  overflow: hidden;

  //隐藏滚动条
  ::scrollbar
  {
  width: 0;
  height: 0;
  }
  ::-webkit-scrollbar
  {
  width: 0;
  height: 0;
  }

  #app{
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    position: relative;
    width: 100%;
    height: 100%;
    background: @blue;
    border-left: 5px dashed @white;
    border-right: 5px solid transparent;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 999;

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

    #app{
      position: relative;
      width: 700px;
      height: 90%;
      margin: 2.5% auto;
      border-left: 10px dashed @white;
      border-radius: 0 2% 2% 0;
      box-shadow: 0 0 10px @gray-deep;
      z-index: 999;
    }

  }
}
</style>

<script>

//导入头部和搜索组件
import Head_ from './components/Head_/Head_'
import Search from './components/Search/Search'

//导入wilddog配置
import { getRef } from '../util/config.js'

const ref = getRef()

export default {
  name: 'app',
  components:{
    Head_,
    Search
  },
  data() {
    return {
      name: 'Dictionary',
      count: '正在计算中'
    }
  },
  beforeMount(){

    const v = this;

    ref.orderByKey().on('value',function(snapshot){
      v.count = snapshot.numChildren()
    });

  }
}
</script>
