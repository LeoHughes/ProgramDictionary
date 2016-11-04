<template lang="pug">

  #container
    .search
      input.search-input(type="text" placeholder="Please enter the words"  @keyup.enter="search" v-model.lazy.trim="key" maxlength="30" required)
      p.info 翻译
      p
        button.pure-button(type="button" @click="search") Translate

      Result(v-bind:isShow="showResult" v-bind:keyWord="key" v-bind:resData="result" v-on:goBack="back")

</template>

<style lang="less">

  @import '../../assets/variable.less';

  #container{
    margin: 5% auto;
    width: auto;
    height: 90%;

    .search {
      margin: auto;
      width: 90%;
      height: 100%;
      text-align: center;

      .search-input {
        padding: 1rem 1.6rem;
        width: 85%;
        font-size: 1.2rem;
        color: @black;
        border: 3px solid white;
        border-radius: 5px;
        line-height: 1em;
      }

      .info {
        color: #fff;
        letter-spacing: 0.05em;
        opacity: 0.8;
      }

    }
  }
  @media screen and (min-width:480px){
    #container{
      max-width: 768px;
    }
  }
</style>

<script>
  //引入result组件
  import Result from '../Result/Result.vue'

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
