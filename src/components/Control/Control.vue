<template lang="pug">
transition(name="transition-animation")
  section#control
    Head_(:title="name")

    .controlForm(v-if="!addComplate")
      .item.warn(v-show="warnInfo !== ''")
        p(v-text="warnInfo")
      .item
        .item-label Words*:
        .item-input
          input(type="text" placeholder="Enter the new words.(20)" maxlength="20" v-model="word.name" disabled)
      .item
        .item-label Explanation*:
        .item-input
          textarea(name="explanations" placeholder="Enter the explanations.(40)" maxlength="40" rows="3" required v-model.lazy.trim="word.transContent" @blur="checkVal")
      .item
        .item-label Description*:
        .item-input
          textarea(name="interpretation" placeholder="Enter the program interpretation.(60)" maxlength="40" rows="3" v-model.lazy.trim="word.description" @blur="checkVal")
      .item
        .item-label Author*:
        .item-input
          input(name="author name" type="text" placeholder="Enter the author name.(20)" maxlength="20" v-model.lazy.trim="word.auth" @blur="checkVal" v-bind:disabled="this.name === 'Edit'")
      .item
        .item-label Website*:
        .item-input
          input(name="website" type="url" placeholder="Enter website or email.(30)" maxlength="30" v-model.lazy.trim="word.website" @blur="checkVal")
      .control-item
        button.btn.add(type="button" @click="update") Complete
        button.btn.cancel(type="button" @click="back") Cancel

    .complateInfo(v-if="showComplateInfo")
      p(v-text="complateInfo")
</template>

<style lang="less">
  @import '../../assets/variable.less';

  #control{

    .controlForm{
      padding: .4rem 0 .8rem 0;

      .item{
        padding: .4rem .8rem;
        margin: .8rem 0;
        background-color: @white;
        font-size: 1.2rem;

        &.warn{
          background-color: @gray;
          p{font-family: @font;}
        }

        .item-label{
          display: inline-table;
          width: 35%;
          vertical-align: top;
        }
        .item-input{
          display: inline-table;
          width: 65%;

          input{
            padding: .25rem 0;
            height: 100%;
            width: 100%;
            border: none;
            background-color: @white;
            font-family: @font;
            font-size: 1rem;
            line-height: 1.2rem;
            &:focus,&:active{
              outline: none;
            }
            &:disabled{
              background-color: @white;
              color: @gray-deep;
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
      @media screen and (max-width: 480px){
        .item{
          .item-label{
            display: block;
            margin-bottom: 8px;
            width: 100%;
          }
          .item-input{
            display: block;
            width: 100%;
          }
        }
      }

      .control-item{
        margin-top: 3rem;
        width: 100%;
        .btn{
          width: 50%;
          padding: 1rem 0;
          text-align: center;
          border: none;
          font-family: @font;
          font-size: 1.2rem;
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

    .complateInfo{
      padding: 1rem .8rem;
      background-color: @white;
    }

  }

</style>

<script>
  import Head_ from '../Head_/Head_'
  import { getRef,getAuthorRef } from '../../../util/config.js'

  const ref = getRef(),
        authorRef = getAuthorRef()

  export default {
    name: 'control',
    components: {
      Head_
    },
    data() {
      return {
        name: this.$route.name, //title
        warnInfo: '', //form验证提示信息
        word: { //新增词条数据
          name: this.$route.query.key,
          transContent: '',
          description: '',
          date: getDate(),
          auth: '',
          website: ''
        },
        addComplate: false, //是否添加完毕
        showComplateInfo: '', //是否展示添加完成提示信息，默认为空，添加完成后改为Boolean
        complateInfo: '' //完成提示信息文字
      }
    },
    beforeRouteEnter (to, from, next) {
      if(to.query.key){
        next()
      }else{
        next('/')
      }
    },
    beforeMount() {
      var _self = this;

      if(this.name === 'Edit'){
        ref.orderByKey().equalTo(_self.word.name).on('value',function(snapshot){
          const data = snapshot.child(_self.word.name).val()

          if(data){
            _self.word.transContent = data.transContent
            _self.word.description = data.description
            _self.word.auth = data.auth
            _self.word.website = data.website
          }

        })
      }

    },
    watch: {
      'addComplate'(){
        if(this.addComplate) this.showComplateInfo = true
      }
    },
    methods: {
      //输入检测
      checkVal(event) {
        if(!event.target.value){
          event.target.focus();
          this.warnInfo = `Please check the ${event.target.name}.`
        }else{
          this.warnInfo = ''
        }
      },
      //取消
      back() {
        this.warnInfo = ''
        this.$router.back()
      },
      //新增、编辑词条
      update(){

        for(let v in this.word){
          if(!this.word[v]){
            this.warnInfo = 'Please enter the corresponding data.'
            return
          }
        }

        const v = this;

        //保存数据
        ref.child(v.word.name).set(v.word).then(()=>{
          v.complateInfo = 'Thanks for your help,wish you have a nice day :-D.'
          v.addComplate = true

          authorCountAdd(v)

          setTimeout(function(){
            v.$router.go(-1)
          },3000)

        }).catch((err)=>{
            v.complateInfo = 'Because some unpredictable reasons fail,or you will come back a little :-D?'

            setTimeout(function(){
              v.$router.go(-1)
            },3000)

        })

      }
    }
  }

  //新增则Author贡献+1
  function authorCountAdd(v){
    if(v.name === 'Add'){
      authorRef.orderByKey().equalTo(v.word.auth).once('value',(snapshot)=>{
        let authData = snapshot.child(v.word.auth).val()

        if(authData){
          authData.count += 1
          authorRef.child(v.word.auth).update(authData)
        }else{
          authData = {}
          authData.name = v.word.auth
          authData.count = 1
          authorRef.child(v.word.auth).set(authData)
        }
      })
    }
  }

  //获得日期
  function getDate(){
    let time = new Date(),
        year = time.getFullYear(),
        m = time.getMonth() + 1,
        month = m < 10 ? ('0' + m) : m,
        d = time.getDate(),
        day = d < 10 ? ('0' + d) : d

    return `${year}/${month}/${day}`
  }
</script>
