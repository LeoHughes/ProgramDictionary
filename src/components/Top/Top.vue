<template lang="pug">
  transition(name="transition-animation")
    section#top
      Head_(:title="name")
      div
</template>

<style lang="less">
  @import '../../assets/variable.less';

  #top{

  }

</style>

<script>

  import Head_ from '../Head_/Head_'
  import { getWilddog,getRef } from '../../../util/config.js'

  const ref = getRef()

  export default {
    name: 'top',
    components: {
      Head_
    },
    data() {
      return {
        name: this.$route.name,
        list: []
      }
    },
    beforeMount() {

    }
  }
</script>
