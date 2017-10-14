const action = {
    UserLogin({commit},data){
        commit("LOGIN",data)
    },
    ArticleList({commit},data){
    	commit("GetArticleList",data)
    },
    testDispatch({commit},data){
    	console.log("this is dispatch");
    }
}
export default action