<template lang="pug">

  #result(:class="{true : isShow}")
    ul
      li(v-for="item in resData" v-text="item.name")

</template>


<style lang="less">
  @import '../../assets/variable.less';

  #result{
    opacity: 0;
    width: 100%;
    height: 70%;
    margin: auto;
    background-color: @white;
    overflow: auto;
    &.true{
      opacity: 1;
      transition: 600ms;
    }
  }
</style>


<script>

export default {
  name: 'result',

  props: {
    isShow: {
      type: Boolean,
      required: true
    },
    resData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {

    }
  }
}

</script>
