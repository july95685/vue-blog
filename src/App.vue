<template>
  <div id="app">
    <div class="sideleft" style="">
      <ul style="">
        <li>
          <div  style="">
          <i class="fa fa-home"></i>
          首页
          </div>
        </li>
         <li>
          <div  style="">
          <i class="fa fa-th"></i>
          专题
          </div>
        </li>
         <li>
          <div  style="">
          <i class="fa fa-mobile"></i>
          下载
          </div>
        </li>
      </ul>
      <ul class="bottomul" style="">
          <li>
               <div  style="">
                <i class="fa fa-sign-in"></i>
                登录
              </div>
          </li>
          <li @click="goRegistor()">
               <div  style="" >
                <i class="fa fa-user"></i>
                注册
              </div>
          </li>
      </ul>
    </div>
    <div >
        <transition>
            <keep-alive>
              <router-view  class="app-view"> </router-view>
            </keep-alive>
        </transition>
    </div>
  </div>
</template>

<script>
export default{
  methods:{
    goRegistor(){
      this.$router.push({
        path: './register'
      });
    }
  }
}
</script>

<style>
  .sideleft{
    display: block;
    width: 280px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    background: rgb(255, 242, 202);
  }
  .sideleft ul{
    margin-left: 8px;
    list-style: none;
  }
  .sideleft li{
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    color: #48576a;
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    white-space: nowrap;
  }
  .sideleft .bottomul{
    position: absolute;
    bottom: 30px;
  }
  .app-view{
    position:fixed;
    left:280px;
    right:0;
    bottom:0;
    top:0;
    background-image: url(../img/bc.jpg);
  }
</style>

