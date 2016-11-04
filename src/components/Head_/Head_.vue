<template lang="pug">

  .header
    .home-menu.pure-menu.pure-menu-open.pure-menu-horizontal
      a.pure-menu-heading(v-text="title")

</template>

<style lang="less">

  @import '../../assets/variable.less';

  .pure-menu-heading{
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
