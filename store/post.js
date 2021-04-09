export default {
    state: () => ({
        topic: null,
        detail: null,
        note: null,
    }),
    mutations:{
        setTopic(state, payload) {
            state.topic = payload
        },
        setDetail(state, payload) {
            state.detail = payload
        },
        setNote(state, payload) {
            state.note = payload
        },
        setClearPost(state) {
            state.topic = null
            state.detail = null
            state.note = null
        },
    },
    actions: {
        async EditPost({commit},payload){
            commit('setTopic', payload.topic)
            commit('setDetail', payload.detail)
            commit('setNote', payload.note)
            this.$router.push('/edites')
        },
        async SubmitEdite({commit},payload){
            const data = {
                topic:payload.topic,
                detail:payload.detail,
                note:payload.note,
            }
            return await this.$axios.$post(process.env.apiUrl+`/edit/notice`,data,
            {
                headers:{
                    'Authorization': `Bearer ${this.state.token}`
                }
            }).then(async(res)=>{                        
                this.$router.push('/')
                commit('setClearPost')
            })
        },
        async SubmitCreate({commit},payload){
            const data = {
                topic:payload.topic,
                detail:payload.detail,
                note:payload.note,
            }
            return await this.$axios.$post(process.env.apiUrl+`/create/notice`,data,
            {
                headers:{
                    'Authorization': `Bearer ${this.state.token}`
                }
            }).then(async(res)=>{                        
                this.$router.push('/')
            })
        },
        async SubmitDelete({commit},payload){
            const data = {
                topic:payload.topic,
            }
            return await this.$axios.$post(process.env.apiUrl+`/delete/notice`,data,
            {
                headers:{
                    'Authorization': `Bearer ${this.state.token}`
                }
            }).then(async(res)=>{      
                this.$router.push('/')
                // this.$router.go()
            })
        },
    }
}