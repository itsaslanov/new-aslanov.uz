<script setup>
import { RouterView } from "vue-router";
import AppNav from "./components/app/AppNav.vue";
import AppFooter from "./components/app/AppFooter.vue";



</script>

<template>
  <AppNav />
  <RouterView />
  <AppFooter class="mt-18px" />
</template>

<style>
.grid-system {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
