<template lang="pug">
  section#add
    Head_(:title="name")


</template>

<style lang="less">
  @import '../../assets/variable.less';

  #add{

  }

</style>

<script>
  import Head_ from '../Head_/Head_'

  export default {
    name: 'add',
    components: {
      Head_
    },
    data() {
      return {
        name: 'Add',
        word: this.$route.query.key
      }
    }
  }
</script>
