const action = {
    UserLogin({commit},data){
        commit("LOGIN",data)
    },
    ArticleList({commit},data){
    	commit("GetArticleList",data)
    }
}
export default action