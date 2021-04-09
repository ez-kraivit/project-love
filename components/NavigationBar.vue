<template>
  <div v-if="$store.state.username">
    <v-app-bar app>
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ประโยคบอกรัก</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            คุณ {{ $store.state.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            username: {{ $store.state.username }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          v-on:click="SelectLink(item.title)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "CreatePost", icon: "mdi-book-plus" },
      { title: "Logout", icon: "mdi-logout" },
    ],
  }),

  methods: {
    SelectLink(name) {
      if (name === "Home") this.$router.push("/");
      if (name === "Logout") this.$store.dispatch("SignOut");
      if (name === "CreatePost")this.$router.push("/creates");
    },
  },
};
</script>