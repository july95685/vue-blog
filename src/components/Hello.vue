<template>
  <div class="hello">
    <div class="text">
        <h1>X乎</h1>
        <h3>交流故事</h3>
        <p>与世界分享你刚扯的故事</p>
        <button class="button">
           <i class="fa fa-home"></i>
            提笔编个故事
        </button>
    </div>
    <div class="article">
        <div>
          <span class="nav-text fir">
              <a href="#">发现</a>
          </span>
          <span class="nav-text">
              <a href="#">专栏</a>
          </span>
          <span class="search clearfloat">
              <span class="input">
                  <input placeholder="搜索">
                  <span class="search-icon">
                      <i class="fa fa-search"></i>
                  </span>
              </span>
          </span>
        </div>
        <div>
           <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
           <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
        </div>
        <div>
            <ul class="articleul">
              <li v-for="(x,index) in list" class="articlelist">
                <div class="content" >
                  <div class="author">
                    <a href="#" class="authorLink">
                      <img src="../../img/avator.jpg" class="authorImg">
                    </a>
                    <div class="card">
                      <a>韩大爷的杂货铺</a>
                      <span>6小时前</span>
                    </div>
                  </div>
                  <a href="#">{{x.title}}</a>
                  <p class="abstract"></p>
                  <div class="meta"></div>
                </div>
              </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[{
        date:"2017/6/28",
        title:"参商"
      },{
        date:"2017/6/27",
        title:"牵丝戏"
      }],
      radio:"1"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text{
  position: absolute;
  color: #ffffff;
  bottom: 0;
  margin-bottom: 40px;
  line-height: 40px;
  margin-left: 20px;
  text-shadow: 1px 1px 1px #000;
}
.button{
  color: #fff;
  background-color: #50bfff;
  border-color: #50bfff;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
}
.article{
  width: 65%;
  right:0; 
  position: absolute;
  background-color: rgba(255,255,255,0.9);
  top: 0;
  z-index: 10;
  bottom:0;

}
.search{
  line-height: 50px;
  float: right;
  margin-right:10px;
}
.search-icon {
    position: absolute;
    top: 0px;
    right: 22px;
}
.articleul{
  margin: 0;
  padding: 0;
  list-style: none;
}
.articlelist{
    position: relative;
    width: 100%;
    margin: 0 0 17px;
    padding: 0 2px 17px 0;
    border-bottom: 1px solid rgb(255, 242, 202);;
    word-wrap: break-word;   
    min-height: 140px;
}
.author{
  margin-bottom: 14px;
  font-size: 13px;
}
.authorLink{
  width: 32px;
  height: 32px;
  display: block;
  cursor: pointer;display: inline-block;
  vertical-align: middle;
}
.authorImg{
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.card{
  display: inline-block;
  vertical-align: middle;
}
</style>
