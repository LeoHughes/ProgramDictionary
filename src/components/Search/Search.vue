<template lang="pug">
  #container
    input.search-input(id="searchInput" v-bind:class="{active : key.length > 0}" type="text" placeholder="Please enter the words" @keyup.enter="search" v-model.lazy.trim="key" maxlength="30" required)
    p.info 翻译【暂只支持英译中】
    p(v-if="!showResult")
      button.trans-button(type="button" @click="search") Translate

    Result(v-bind:isShow="showResult" v-bind:keyWord="key" v-bind:resData="result" v-on:goBack="back")
</template>

<style lang="less">

  @import '../../assets/variable.less';

  #container{
    padding: 1rem 1.2rem;
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

  }

</style>

<script>
  import Result from '../Result/Result'
  import config from '../../../util/config.js'

  const ref = config()

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
    methods: {
      search(event) {
        let _self = this;

        if(_self.key === ''){
          document.getElementById('searchInput').focus();
          return;
        }else{

          _self.showResult = true;

          _self.result = [];

          ref.orderByChild('name').equalTo(_self.key).on("value",function(snapshot){
            var data = snapshot.val();

            snapshot.forEach(function(snap){
              _self.result.push(snap.val())
            });
          });

        }

      },
      back() {
        if(this.showResult) this.showResult = false;
        this.key = '';
        this.result = [];
      }
    }
  }
</script>
