<template lang="pug">
  section#add
    Head_(:title="name")
    div.addForm
      .item
        .item-label Words:
        .item-input
          input(type="text" placeholder="Enter the new words.(20)" maxlength="20" v-model="word.name")
      .item
        .item-label Explanation:
        .item-input
          textarea(placeholder="Enter the explanations.(40)" maxlength="40" rows="3" v-model="word.transContent")
      .item
        .item-label Description:
        .item-input
          textarea(placeholder="Enter the program interpretation.(60)" maxlength="40" rows="5" v-model="word.description")
      .item
        .item-label Author:
        .item-input
          input(type="text" placeholder="Enter the author name.(20)" maxlength="20" v-model="word.auth")
      .item
        .item-label Github:
        .item-input
          input(type="text" placeholder="Enter the URL of github.(20)" maxlength="20" v-model="word.github")
      .control-item
        button.btn.add(type="button" @click="add") Add
        button.btn.cancel(type="button" @click="back") Cancel
</template>

<style lang="less">
  @import '../../assets/variable.less';

  #add{

    .addForm{
      padding: .4rem 0;

      .item{
        padding: .4rem .8rem;
        margin: .8rem 0;
        background-color: @white;
        font-size: 1.2rem;
        .item-label{
          display: inline-table;
          width: 35%;
          vertical-align: top;
        }
        .item-input{
          display: inline-table;
          width: 65%;

          input[type="text"]{
            padding: .25rem;
            height: 100%;
            border: none;
            font-family: @font;
            font-size: 1rem;
            line-height: 1.2rem;
            &:focus,&:active{
              outline: none;
            }
          }

          textarea{
            width: 100%;
            font-family: @font;
            font-size: 1rem;
            line-height: 1.2rem;
            border: none;
            resize: none;
            &:focus,&:active{
              outline: none;
            }
          }

        }

      }

      .control-item{
        margin-top: 5rem;
        width: 100%;
        .btn{
          width: 50%;
          padding: 1rem 0;
          text-align: center;
          border: none;
          &.add{
            color: @black;
            background-color: @gray;
          }
          &.cancel{
            color: @black;
            background-color: @white;
          }
        }
      }

    }

  }

</style>

<script>
  import Head_ from '../Head_/Head_'
  import config from '../../../util/config.js'

  export default {
    name: 'add',
    components: {
      Head_
    },
    data() {
      return {
        name: 'Add',
        word: {
          name: this.$route.query.key,
          transContent: '',
          description: '',
          date: '',
          auth: '',
          github: ''
        }
      }
    },
    methods: {
      //取消
      back() {
        this.$router.back();
      },
      //新增词条
      add(){
        console.log(this.word);
      }
    }
  }
</script>
