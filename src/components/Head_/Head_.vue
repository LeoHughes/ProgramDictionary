<template lang="pug">
  .header
    a.bland(v-text="title")
    router-link.top(:to={name:'Top'} v-if="title=='Dictionary'") Top
    router-link.top(:to={name:'Index'} v-else) Back
</template>

<style lang="less">

  @import '../../assets/variable.less';

  .header{
    padding: 1.2rem .8rem;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: @white;
    overflow: hidden;
    .bland{
      float: left;
    }
    a.top{
      color: @white;
      text-decoration: none;
      float: right;
    }
  }

</style>

<script>
  export default {
    name: 'head_',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {

      }
    }
  }
</script>
