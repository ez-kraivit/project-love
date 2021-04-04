<template>
  <v-footer padless v-if="$store.state.username">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>ประโยคบอกรัก</strong>
    </v-col>
  </v-footer>
</template>