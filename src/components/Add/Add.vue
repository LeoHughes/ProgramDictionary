<template lang="pug">
  section#add
    Head_(:title="name")
    form.pure-form.pure-g
      label.pure-u-1.pure-u-sm-1.pure-u-md-1-4.pure-u-lg-1-4 Words:
      .pure-u-1.pure-u-sm-1.pure-u-md-3-4.pure-u-lg-3-4
        input.pure-input-1(type="text" placeholder="Enter the new words.(20)" maxlength="20" required v-model="word")

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
