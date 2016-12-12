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
  import { getAuthorRef,getRef } from '../../../util/config.js'

  const authorRef = getAuthorRef()

  export default {
    name: 'top',
    components: {
      Head_
    },
    data() {
      return {
        name: this.$route.name,
        topList: []
      }
    },
    created() {
      let _self = this;

      authorRef.orderByChild('name').on('value',(snaphot)=>{
        console.log(snaphot.val())

        // let dataArr = snaphot.val()

        // dataArr.sort((a,b)=>{
        //   return (a.count > b.count) ? 1 : -1
        // })

        // _self.topList = dataArr
      })
    }
  }
</script>
