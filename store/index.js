import firebase, { auth, GoogleProvider } from '@/services/firebase.js'
export default {
    state: () => ({
        username: null,
        name: null,
        token: null,
    }),
    mutations: {
        setToken(state, payload) {
            state.token = payload
        },
        setUsername(state, payload) {
            state.username = payload
        },
        setName(state, payload) {
            state.name = payload
        },
        setClear(state) {
            state.username = null
            state.name = null
            state.token = null
        }
    },
    actions: {
        CreateUser({ commit }, payload) {
            if(payload.username===null||payload.password===null||payload.name===null){
                return this.$router.push('/register')
            }
            return firebase.auth().createUserWithEmailAndPassword(payload.username, payload.password)
                .then(async(userCredential) => {
                    let data = {
                        uid : userCredential.user.uid,
                        "username":payload.username,
                        "name":payload.name
                    }
                    return await this.$axios.$post(process.env.apiUrl+`/create/profile`,data,
                    {
                        headers:{
                            'Authorization': `Bearer ${userCredential.user.za}`
                        }
                    }).then(async(res)=>{                        
                        commit('setToken',userCredential.user.za)
                        commit('setName', payload.name)
                        commit('setUsername', payload.username)
                        this.$router.push('/')
                    }).catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        this.$router.push('/login')
                      });
                })
        },
        SignInUser({ commit,redirect }, payload) {
            // if(payload.username===null||payload.password===null){
            //     return this.$router.push('/login')
            // }
            return firebase.auth().signInWithEmailAndPassword(payload.username,payload.password).then(async(userCredential) => {
                await this.$axios.$post(process.env.apiUrl+`/profile`,null,
                {
                    headers:{
                        'Authorization': `Bearer ${userCredential.user.za}`
                    }
                }).then(async(res)=>{    
                commit('setToken',userCredential.user.za)
                commit('setUsername', res.username)
                commit('setName',res.name)
                this.$router.push('/')
                })
              }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                this.$router.push('/login')
              });
        },
        SignOut({ commit }) {
            return firebase.auth().signOut().then(() => {
                commit('setClear')
                window.localStorage.clear()
                this.$router.push('/login')
            })
        }
    }
}