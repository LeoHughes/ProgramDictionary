<template lang="pug">
  transition(name="transition-animation")
    section#top
      Head_(:title="name")
      #topList
        transition-group(tag="ul" name="list")
          li.list-item(v-bind:key="-1")
            div Number
            div Name
            div Count
          li.list-item(v-for="(item,index) in topList" v-bind:key="index")
            div(v-text="index+1")
            div(v-text="item.name")
            div(v-text="item.count")
</template>

<style lang="less">
  @import '../../assets/variable.less';

  #top{
    width: 100%;
    height: 100%;

    #topList{
      padding: .8rem;
      ul{
        margin: 0 0;
        padding: 0 0;

        li.list-item{
          padding: 1rem;
          margin: .3rem 0;
          list-style: none;
          background-color: @white;
          overflow: hidden;

          div{
            display: inline-block;
            padding: .5rem 0;
            width: 33.3%;
            float: left;
            font-size: 1.2rem;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          &.list-enter-active, &.list-leave-active {
            transition: all .8s;
          }
          &.list-enter, &.list-leave-active {
            opacity: 0;
            transform: rotateY(90deg);
          }

        }

      }
    }

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
        allCount: 0,
        topList: []
      }
    },
    created() {
      let v = this;

      authorRef.orderByChild('count').limitToFirst(10).on('child_added',(snapshot)=>{

        v.topList.push(snapshot.val())

        v.topList.sort((a,b)=>{
          return b.count - a.count
        })

      })

    }
  }
</script>
