<script setup>
import { RouterView } from "vue-router";
import AppNav from "./components/app/AppNav.vue";
import AppFooter from "./components/app/AppFooter.vue";
import AppShowBar from "./components/app/AppShowBar.vue";
</script>

<template>
  <AppShowBar />
  <AppNav />
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </RouterView>
  <AppFooter class="mt-24px" />
</template>

<style>
.grid-system {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
