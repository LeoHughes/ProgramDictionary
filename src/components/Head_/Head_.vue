<template lang="pug">
  .header
    a.bland(v-text="title")
    a.user(v-if="userName" v-text="userName")
    a.user(v-else) Login
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
    .user{
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
      return {}
    }
  }
</script>
