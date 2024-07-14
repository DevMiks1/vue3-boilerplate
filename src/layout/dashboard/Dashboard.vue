<template>
  <v-app>
    <Sidebar />
    <Header />

    <v-main class="bg-grey-lighten-3">
      <v-container class="py-8 px-6" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
  
  <script setup>
import { defineAsyncComponent } from "vue";

const Sidebar = defineAsyncComponent(() => import("./Sidebar.vue"));
const Header = defineAsyncComponent(() => import("./Header.vue"));
</script>
  
  <script>
</script>