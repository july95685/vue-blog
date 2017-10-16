import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
    	path: '/register',
    	name: 'register',
    	component(resolve){
    		require.ensure(['@/components/Register.vue'],()=>{
    			resolve(require('@/components/Register.vue'))
    		});
    	}
    },{
    	path: '/login',
    	name: 'login',
    	component(resolve){
    		require.ensure(['@/components/login.vue'],()=>{
    			resolve(require('@/components/login.vue'))
    		});
    	}
    },{
      path: '/home',
      name: 'home',
      component(resolve){
        require.ensure(['@/components/Home.vue'],()=>{
          resolve(require('@/components/Home.vue'))
        });
      }
    },{
      path: '/articleContent',
      name: 'articleContent',
      component(resolve){
        require.ensure(['@/components/component/articleContent.vue'],()=>{
          resolve(require('@/components/component/articleContent.vue'))
        });
      }
    },{
      path: '/account',
      name: 'account',
      component(resolve){
        require.ensure(['@/components/Account.vue'],()=>{
          resolve(require('@/components/Account.vue'))
        });
      },
      meta:{
        requireAuth: true,
        title: '修改账户'
      }
    },{
      path:'/editor',
      name:'editor',
      component(resolve){
        require.ensure(['@/components/Editor.vue'],()=>{
          resolve(require('@/components/Editor.vue'))
        });
      },
      meta:{
        requireAuth:true,
        title:"编辑文章"
      }
    }
  ]
})

router.beforeEach((to,from,next) => {
  let token = sessionStorage.getItem('token');
  if(to.meta.requireAuth){
    if(token){
      next()
    }else{
      next({
        path: '/login',
        query:{ redirect: to.fullPath }
      })
    }
  }else{
    next()
  }
})

export default router
