<template lang="pug">

  section#result(:class="{true : isShow}")
    p.back
      button.pure-button(type="button" @click="goBack") back

    ul(v-if="resData.length !== 0")
      li(v-for="item in resData")
        h2(v-text="item.name")
        p(v-text="'[ 常见释义 ] : ' + item.transContent")

    p.noDataInfo(v-else).
      暂无 <strong v-text="keyWord"></strong> 的查询结果，<router-link :to="{path:'/add',query:{key:keyWord}}">点击添加</router-link>此词条信息

</template>


<style lang="less">
  @import '../../assets/variable.less';

  #result{
    padding: .6rem .8rem;
    width: auto;
    height: 65%;
    background-color: @white;
    border-radius: 5px;
    text-align: left;
    overflow: auto;
    opacity: 0;
    transition: 300ms;
    &.true{
      opacity: 1;
      transition: 300ms;
    }

    ul{
      margin: 0 0;
      padding: 0 0;
      li{
        list-style: none;
      }
    }

    p.back{
      text-align: right;
    }

    p.noDataInfo{
      a{
        font-weight: bold;
        color: @blue;
        text-decoration: none;
      }
    }

  }
  @media screen and (min-width:480px){
    #result{
      padding: 1rem 2rem;
    }
  }
</style>


<script>

export default {
  name: 'result',
  props: {
    isShow: {
      type: Boolean,
      required: true
    },
    keyWord: {
      type: String,
      required: true
    },
    resData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {
    goBack() {
      this.$emit('goBack');
    }
  }
}

</script>
