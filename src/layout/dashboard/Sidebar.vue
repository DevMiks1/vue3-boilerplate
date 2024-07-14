<template>
    <v-navigation-drawer v-model="isSidebarOpen">
      <div class="text-center border-b justify-center items-center px-5 py-5">
        <p class="text-red-darken-2 font-[500] text-[1.2rem]">VUE</p>
      </div>
      <v-list v-for="(sidebar, index) in sidebarItems" :key="sidebar.icon" class="py-1">
        <v-hover v-slot="{ isHovering, props }">
          <v-list-item
            v-bind="props"
            :prepend-icon="sidebar.icon"
            :title="sidebar.title"
           
            link
            :class="[
              selectedItem === index ? 'bg-red-darken-2 text-white ' : '',
              isHovering ? 'bg-red-darken-2 text-white' : '', ]"
            @click="() => navigate(sidebar.to, index)"
          ></v-list-item>
        </v-hover>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import { sidebarItems } from "../../components/json/SidebarItems";
  import { isSidebarOpen } from "../../components/helper/ToggleSidebar";
  // import logo
  const router = useRouter();
  const route = useRoute();
  const selectedItem = ref(0);
  
  const navigate = (to, index) => {
    selectedItem.value = index;
    router.push(to);
  };
  
  // Set the selected item based on the current route
  onMounted(() => {
    const currentRoute = route.path;
    const index = sidebarItems.findIndex((item) => item.to === currentRoute);
    if (index !== -1) {
      selectedItem.value = index;
    } else {
      selectedItem.value = 0; // Default to the first item
    }
  });
  </script>
  
  <style>
  /* Add any custom styles for the sidebar here */
  </style>