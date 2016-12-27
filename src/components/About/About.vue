<template lang="pug">
transition(name="transition-animation")
  section#about
    Head_(:title="name")
    #about-info(v-text="text")
</template>

<style lang="less">
  @import '../../assets/variable.less';

  #about{
    width: 100%;
    height: 100%;

    #about-info{
      position: relative;
      margin: 5rem .8rem .8rem 1rem;
      padding: 3rem 1rem 1rem 1rem;
      height: 50%;
      font-size: 1.4rem;
      line-height: 2rem;
      text-indent: 2rem;
      background-color: @white;
      border-top-left-radius: 10px 60px;
      border-top-right-radius: 160px 25px;
      border-bottom-right-radius: 50px 10px;
      border-bottom-left-radius: 5px 100px;
      &::before{
        content: '';
        position: absolute;
        top: .8rem;
        left: .8rem;
        width: 10px;
        height: 10px;
        background: @blue;
        border-radius: 100%;
      }
      &::after{
        content: '';
        position: absolute;
        bottom: .8rem;
        right: .8rem;
        width: 10px;
        height: 10px;
        background: @blue;
        border-radius: 100%;
      }
    }

  }
</style>

<script>
  import Head_ from '../Head_/Head_'

  const description = '这是一个翻译程序开发英文单词的小型SPA应用，任何人都可以添加、修改词条信息。'

  export default {
    name: 'about',
    components: {
      Head_
    },
    data() {
      return {
        name: this.$route.name,
        text: description
      }
    }
  }
</script>
