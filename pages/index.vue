<template>
  <v-container>
    <v-row v-if="listsnotice">
      <v-col cols="12" v-for="n in listsnotice" :key="n.topic">
        <v-card color="#385F73" dark class="rounded-xl">
          <v-card-title class="headline"> {{ n.topic }} </v-card-title>
          <v-card-subtitle>{{ n.detail }} </v-card-subtitle>
          <v-card-actions class="px-10 pa-5">
            <p text>{{ n.like }}</p>
            <v-spacer></v-spacer>
            <v-btn outlined rounded  @click="EditPost({topic:n.topic,detail:n.detail,note:n.note})"> Edit </v-btn>
            <v-btn  rounded  color="error" @click="CallSubmitDeletePost({topic:n.topic})"> Delete </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      listsnotice: [],
    };
  },
  middleware: "AuthUser",
  created() {
    this.GetDemo();
  },
  methods: {
    CallSubmitDeletePost(data){
      this.SubmitDelete(data).then(()=>{
        this.GetDemo()
      })
    },  
    ...mapActions('post',['SubmitDelete']),
    ...mapActions('post',['EditPost']),
    GetDemo() {
      this.$axios.$get(process.env.apiUrl + `/`).then((res) => {
        this.listsnotice = [...res];
      });
    },
  },
};
</script>
