import firebase, { auth, GoogleProvider } from '@/services/firebase.js'
export default {
    state: () => ({
        username: null,
        name: null,
        user: null,
    }),
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setUsername(state, payload) {
            state.username = payload
        },
        setName(state, payload) {
            state.name = payload
        },
        setClear(state) {
            state.user = null
            state.username = null
            state.name = null
        }
    },
    actions: {
        CreateUser({ commit }, payload) {
            return firebase.auth().createUserWithEmailAndPassword(payload.username, payload.password)
                .then(async(userCredential) => {
                    console.log(userCredential.user)
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
                        // commit('setUser', userCredential.user)
                        commit('setName', payload.name)
                        commit('setUsername', payload.username)
                        this.$router.push('/')
                    })
                })
                .catch((error) => {
                    commit('setClear')
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        },
        SignInUser({ commit }, payload) {
            return firebase.auth().signInWithEmailAndPassword(payload.username,payload.password).then(async(userCredential) => {
                return await this.$axios.$post(process.env.apiUrl+`/profile`,null,
                {
                    headers:{
                        'Authorization': `Bearer ${userCredential.user.za}`
                    }
                }).then(async(res)=>{    
                // commit('setUser', userCredential.user)
                commit('setUsername', res.username)
                commit('setName',res.name)
                this.$router.push('/')
                })
              })
        },
        SignOut({ commit }) {
            commit('setClear')
            this.$router.push('/login')
            return this
        }
    }
}