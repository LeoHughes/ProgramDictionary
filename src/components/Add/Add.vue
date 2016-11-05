<template lang="pug">

  form.pure-form pure-g
    label.pure-u-1.pure-u-sm-1.pure-u-md-1-4.pure-u-lg-1-4 Words:
    .pure-u-1.pure-u-sm-1.pure-u-md-3-4.pure-u-lg-3-4
      input.pure-input-1(type="text" placeholder="Enter the new words.(20)" maxlength="20" required)


</template>

<style lang="less">

</style>

<script>
  export default {
    name: 'add',
    data() {
      return {

      }
    }
  }
</script>
