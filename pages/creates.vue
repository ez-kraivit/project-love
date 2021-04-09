<template>
  <v-container fluid fill-height align-center ma-0 pa-0>
    <v-row justify="center" align-center on-gutters>
      <v-col cols="10" sm="6" align="center">
        <form>
          <v-text-field
            solo
             v-model.trim.lazy="topic"
            :counter="100"
            label="Topic"
            required
          ></v-text-field>
          <v-textarea
             v-model.trim.lazy="detail"
            solo
            name="input-7-4"
            label="Detail"
            required
          ></v-textarea>
          <v-text-field
            solo
             v-model.trim.lazy="note"
            :counter="100"
            label="note"
            required
          ></v-text-field>
          <v-btn class="mr-4" v-on:click="SubmitCreate({topic,detail,note})" color="primary"> send </v-btn>
          <v-btn v-on:click="clear"> clear </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      topic: null,
      detail: null,
      note: null,
    };
  },
  middleware: "AuthUser",
  methods: {
    ...mapActions('post',['SubmitCreate']),
    clear() {
        this.topic = null
        this.detail = null
        this.note = null
    },
  },
};
</script>