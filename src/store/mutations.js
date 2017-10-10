const mutations = {
    LOGIN:(state,data) => {
            console.log("commit Login")
            sessionStorage.setItem('token',data)
            state.token = data
    }
}
export default mutations