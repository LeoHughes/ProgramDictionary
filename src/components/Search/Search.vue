<template lang="pug">
  #container
    input.search-input(id="searchInput" v-bind:class="{active : key.length > 0}" type="text" placeholder="Please enter the words" @keyup.enter="search" v-model.lazy.trim="key" maxlength="30" required)
    p.info 翻译【暂只支持英译中】
    p.info 词条总数：
      span(v-text="wordsCount")
    p(v-if="!showResult")
      button.trans-button(type="button" @click="search") Translate

    Result(v-bind:isShow="showResult" v-bind:keyWord="key" v-bind:resData="result" v-on:goBack="back")

    p.brand-info(v-if="!showResult")
      router-link(v-bind:to="{name:'About'}") @about
</template>

<style lang="less">

  @import '../../assets/variable.less';

  #container{
    position: relative;
    padding: .8rem;
    margin: 0 auto;
    height: 80%;
    text-align: center;

    .search-input {
      box-sizing: border-box;
      margin: 0 auto;
      padding: .8rem 1.2rem;
      width: 80%;
      font-size: 1.2rem;
      font-family: @font;
      color: @black;
      border: none;
      border-radius: 15px;
      line-height: 1rem;
      transition: ease-in-out .4s;
      &:active,&:focus,&.active{
        width: 100%;
        border-radius: 0;
        outline: none;
      }
    }

    .info {
      color: #fff;
      letter-spacing: 0.05em;
      opacity: 0.8;
    }

    .trans-button{
      padding: .6rem 1.2rem;
      background-color: @white;
      border: none;
      font-size: 1.2rem;
      line-height: 1.2rem;
      font-family: @font;
      border-radius: 5px;
    }

    .brand-info{
      position: absolute;
      margin: 0 auto;
      bottom: 0;
      right: .8rem;
      a{
        color: @white;
        text-decoration: none;
      }
    }

  }

</style>

<script>
  import Result from '../Result/Result'
  import {getRef} from '../../../util/config.js'

  const ref = getRef()

  export default {
    name: 'search',
    components: {
      Result
    },
    data() {
      return {
        key: '',
        showResult: false,
        result: []
      }
    },
    props: {
      wordsCount: {
        type: [String,Number],
        required: true
      }
    },
    methods: {
      search(event) {
        let v = this

        if(v.key === ''){
          document.getElementById('searchInput').focus()
          return
        }else{

          ref.orderByChild('name').equalTo(v.key).on("value",(snapshot)=>{
            var data = snapshot.val()

            v.showResult = true
            v.result = []

            snapshot.forEach((snap)=>{
              v.result.push(snap.val())
            })
          })

        }
      },
      back() {
        if(this.showResult) this.showResult = false
        this.key = ''
        this.result = []
      }
    }
  }
</script>
