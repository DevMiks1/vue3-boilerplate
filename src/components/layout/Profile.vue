<template>
  <v-row justify="end">
    <v-col cols="auto">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-avatar
            v-bind="props"
            size="40"
            color="grey lighten-2"
            class="cursor-pointer"
          >
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John Doe"
            />
          </v-avatar>
        </template>
        <v-card class="w-52 mt-2">
          <v-list
            
            v-for="profileItem in profileItems"
            :key="profileItem.id"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-list-item
                v-bind="props"
                :class="isHovering ? 'bg-red darken-2 cursor-pointer' : ''"
                :title="profileItem.title"
                :prepend-icon="profileItem.icon"
              >
              </v-list-item>
            </v-hover>
          </v-list>
        </v-card>
      </v-menu>
    </v-col>
  </v-row>
</template>
  <script setup>
import { useRouter } from "vue-router";
import { profileItems } from "../json/ProfileItems";
const router = useRouter();
</script>