<template lang="pug">
  #container
    input.search-input(type="text" placeholder="Please enter the words"  @keyup.enter="search" v-model.lazy.trim="key" maxlength="30" required)
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
      margin: 0 auto;
      padding: .8rem 1.2rem;
      width: 80%;
      font-size: 1.2rem;
      color: @black;
      border: none;
      border-radius: 5px;
      line-height: 1rem;
      &:active,&:focus{
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
    name: 'trans',
    components: {
      Result
    },
    data() {
      return {
        key: 'application',
        showResult: false,
        result: []
      }
    },
    methods: {
      search() {
        let _self = this;

        if(_self.key === ''){
          return;
        }else{

          _self.showResult = true;

          ref.orderByChild('name').equalTo(_self.key).on("value",function(snapshot){
            var data = snapshot.val() || [];

            _self.result = data;

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
