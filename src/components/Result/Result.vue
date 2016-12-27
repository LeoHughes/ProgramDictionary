<template lang="pug">
  transition(name="transition-animation")
    section#result(v-show="isShow")
      p.topBar
        a.back(@click="goBack") back
        router-link.edit(:to="{name:'Edit',query:{key:keyWord}}" v-show="resData.length !== 0") edit

      ul.infoUl(v-if="resData.length !== 0")
        li(v-for="item in resData")
          h2(v-text="item.name")
          p(v-text="'[ 常见释义 ] : ' + item.transContent")
          p(v-text="'[ 常见程序开发释义 ] : ' + item.description")
          p.auth 贡献者：
            a(:href="item.website" target="_blank" v-text="item.auth")

      .noDataInfo(v-else)
        p.
          暂无 <strong v-text="keyWord"></strong> 的查询结果.
        p.addLink.
          <router-link :to="{name:'Add',query:{key:keyWord}}">点击添加</router-link>
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

    ul.infoUl{
      margin: 0 0;
      padding: 0 0;
      li{
        list-style: none;
        p{
          margin: 1.2rem 0;
          font-size: 1.1rem;
          line-height: 1.8rem;
          &.auth{
            text-align: right;
            a{
              color: @blue;
              text-decoration: none;
              &:hover,&:active,&:focus{
                color: @blue;
              }
            }
          }
        }
      }
    }

    p.topBar{
      margin: .4rem 0;
      overflow: hidden;
      a{
        font-size: 1.2rem;
        line-height: 1.2rem;
        font-family: @font;
        &.back{float:right;}
        &.edit{float:left;color:@black;}
      }
    }

    .noDataInfo{
      font-size: 1.1rem;
      text-align: center;
      .addLink{
        margin-top: 1rem;
        a{
          margin: 0 5px;
          font-weight: bold;
          color: @blue;
          text-decoration: none;
        }
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
