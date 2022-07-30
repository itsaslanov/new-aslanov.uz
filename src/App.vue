<script setup>
import AppNavMobile from './components/app/AppNavMobile.vue'
import { RouterView } from 'vue-router'

</script>

<template>
  <AppNavMobile />

  <div class="max-w-[1080px] m-auto">
    <RouterView />
  </div>
</template>
