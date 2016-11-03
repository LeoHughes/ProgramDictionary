<template lang="pug">

  #container
    .search
      input.search-input(type="text" placeholder="Please enter the words"  @keyup.enter="search" v-model.lazy.trim="key" maxlength="30" required)
      p.info 翻译
      p
        button.pure-button(type="button" @click="search") Translate

      Result(:resData="result")
</template>

<style lang="less">

  @import '../../assets/variable.less';

  #container{
    position: absolute;
    top: 10%;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 90%;
    height: 90%;

    .search {
      width: 100%;
      height: 100%;
      text-align: center;
      text-transform: uppercase;

      .search-input {
        padding: 1rem 1.6rem;
        width: 80%;
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
        result: []
      }
    },
    methods: {
      search() {
        let _self = this;

        if(_self.key === '') return

        ref.orderByChild('name').equalTo(_self.key).on("value",function(snapshot){
          var data = snapshot.val() || [];

          _self.result = data;

        });

      }
    }
  }
</script>
