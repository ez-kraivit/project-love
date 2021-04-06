<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-for="n in items" :key="n.name">
        <v-card color="#385F73" dark>
          <v-card-title class="headline"> {{n.name}} </v-card-title>
          <v-card-subtitle
            >{{n.detail}}
            </v-card-subtitle
          >
          <v-card-actions>
            <v-btn text> {{n.like}} </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  middleware: "AuthUser",
  created() {
    this.GetDemo();
  },
  methods: {
    GetDemo() {
      this.$axios.$get(process.env.apiUrl+`/`).then((res) => {
        console.log(res)
        this.items = res;
      });
    },
  },
  components: {},
};
</script>
