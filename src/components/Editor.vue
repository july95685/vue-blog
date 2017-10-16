<template>
  <div class="wrapper">
    <div class="title">
      <span>标题</span>
      <input type="text" placeholder="请输入标题" v-model="title">
    </div>
    <div id="tags">
      <input type="text" placeholder="tags choose" v-model="tags">
    </div>
    <div class="info">
      <textarea id="editor" v-model="content"></textarea>
    </div>
    <button class="publish" @click="saveArticle(title)">发布文章</button>
    <button class="draft" @click="saveDraft()">存为草稿</button>
  </div>
</template>
<script>
  import {mapActions,mapMutations,mapState} from 'vuex'
  import api from '../axios'
  export default {
     data(){
      return {
        title:"",
        tags:"",
        content:""
      }
     },
     create(){
     },
     computed:{

     },
     methods:{
      saveArticle(title){
        console.log(title);
        console.log(this.tags);
         var opt = {
            title:"july first art",
            tags:"test",
            content:"956855391"
         }
         api.saveArticle(opt).then(({data}) => {
            console.log(data);
         })
      },
      saveDraft(){

       }
     }

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .wrapper {
    position: relative;
    padding: 0 3.125rem 0;
    input {
      border: none;
      border-bottom: 0.125rem solid rgb(129, 216, 208);
      outline: none;
      background: transparent;
      color: #999999;
      margin-bottom: 0.625rem;
      text-align: center;
    }
    .title input {
      width: 100%;
      height: 1.5rem;
      font-size: 1rem;
    }
    #tags {
      input {
        width: 6.25rem;
        height: 1.875rem;
        font-size: 1rem;
        margin-right: 0.125rem;
      }
    }
    .info {
      border: 0.125rem solid rgb(129, 216, 208);
      position: relative;
      height: 29.375rem;
      .right {
        color: #ffffff;
        position: absolute;
        right: -0.125rem;
        top: -2rem;
        border-top: 0.125rem solid rgb(129, 216, 208);
        border-right: 0.125rem solid rgb(129, 216, 208);
        border-left: 0.125rem solid rgb(129, 216, 208);
        p {
          float: left;
          width: 5rem;
          height: 1.875rem;
          line-height: 1.875rem;
          text-align: center;
          cursor: pointer;
        }
        p:nth-child(1) {
          border-right: 0.125rem solid rgb(129, 216, 208);
        }
      }
      #editor {
        width: 100%;
        height: 29.375rem;
        border: none;
        background: transparent;
        resize: none;
        outline: none;
        font-size: 1rem;
        overflow-y: auto;
        white-space: pre-wrap;
        font-family: Georgia, "Times New Roman", "Microsoft YaHei", "微软雅黑",  STXihei, "华文细黑",  serif;
        color: #333;
      }
      .preview {
        font-family: Georgia, "Times New Roman", "Microsoft YaHei", "微软雅黑",  STXihei, "华文细黑",  serif;
        display: block;
        height: 26.875rem;
        color: #ffffff;
        font-size: 1rem;
        overflow-y: auto;
        padding: 1.25rem 1.25rem;
        white-space: pre-wrap;
        word-wrap: break-word;
        outline: none;
        border: none;
      }
    }
  }
  .publish {
    width: 6.25rem;
    background: rgb(129, 216, 208);
    color: #000;
  }
  .draft {
    width: 6.25rem;
    background: rgb(129, 216, 208);
    color: #000;
  }
  .active {
    background: rgb(129, 216, 208);
    color: #111111;
  }
  @media screen and (max-width: 440px) {
    .wrapper {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
      margin-bottom: 5rem;
    }
    .publish {
      position: absolute !important;
      bottom: -3rem !important;
      left: 1rem !important;
    }
    .draft {
      position: absolute !important;
      left: calc(100% - 7.25rem) !important;
      bottom: -3rem !important;
    }
    #tags {
      width: 13.7rem !important;
    }
    .icon-zengjia {
      margin-left: -1rem !important;
    }
  }
</style>
