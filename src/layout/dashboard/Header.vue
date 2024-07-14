<template>
    <v-app-bar color="white" class="px-3">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="toggleSidebar"></v-app-bar-nav-icon>
      </template>
      <!-- profile menu from component -->
       <ProfileMenu />
    </v-app-bar>
  </template>
  
  <script setup>
  import { defineAsyncComponent } from "vue";
  import { toggleSidebar } from "../../components/helper/ToggleSidebar";
  const ProfileMenu = defineAsyncComponent(() => import("../../components/layout/Profile.vue"))
  
  const profile = [
    { id: 1, name: "Profile", icon: "mdi-domain" },
    { id: 2, name: "Settings", icon: "mdi-cog" },
    { id: 3, name: "Logout", icon: "mdi-logout" },
  ];
  </script>
  
  <style>
  /* Add any custom styles for the header here */
  </style>