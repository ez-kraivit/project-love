<template>
  <v-container fluid fill-height align-center ma-0 pa-0>
    <v-row justify="center" align-center on-gutters>
      <v-col cols="10" sm="6" align="center">
        <v-card elevation="2">
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" lg="12" align="center">
                <v-text-field
                 v-model.trim.lazy="username"
                  label="username"
                  autocomplete="off"
                  type="email"
                  solo
                  required
                ></v-text-field>
                <v-text-field
                  v-model.trim.lazy="password"
                  label="password"
                  autocomplete="off"
                  type="password"
                  solo
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn elevation="2" color="primary" v-on:click="SignInUser({username,password})">Login </v-btn>
                <v-btn elevation="2" color="primary" to="/register">Register </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
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
            username:null,
            password:null,
        }
    },
    methods: {
        ...mapActions(['SignInUser']),
        // Login(){
        //     this.$store.dispatch("SignInUser",{
        //         username:this.username,
        //         password:this.password
        //     })
        // }
    },
}
</script>