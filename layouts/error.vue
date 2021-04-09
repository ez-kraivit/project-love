<template>
  <v-container fluid fill-height align-center ma-0 pa-0>
    <v-row justify="center" align-center on-gutters>
      <v-col cols="10" sm="6" align="center" v-if="error.statusCode === 404">
        <v-card elevation="2">
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" lg="12" align="center">
                <v-label solo> 404 Not Found </v-label>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="10" sm="6" align="center" v-else>
        <v-card elevation="2">
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" lg="12" align="center">
                <v-label solo> Error {{ error.statusCode }} {{type}} </v-label>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>
