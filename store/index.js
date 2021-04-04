export default{
    state:()=>({
        username:null,
        name:null,
    }),
    mutations:{
        setUsername(state,payload){
            state.username = payload
        },
        setName(state,payload){
            state.name = payload
        },
        setClear(state){
            state.username = null
            state.name = null
        }
    },
    actions:{
        SignInUser({commit},payload){
            commit('setUsername',payload.username)
            commit('setName','Kraivit')
            this.$router.push('/')
            return this
        },
        SignOut({commit}){
            commit('setClear')
            this.$router.push('/login')
            return this
        }
    }
}