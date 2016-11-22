<template lang="pug">
  .header
    a(v-text="title")
</template>

<style lang="less">

  @import '../../assets/variable.less';

  .header{
    padding: 1.2rem .8rem;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: @white;
  }

</style>

<script>
  export default {
    name: 'head_',
    props: ['title'],
    data() {
      return {}
    }
  }
</script>
