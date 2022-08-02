<script setup>
import { RouterView } from 'vue-router'
import AppNav from './components/app/AppNav.vue'
import AppHeader from './components/app/AppHeader.vue'
import BaseBadge from './components/base/BaseBadge.vue';

</script>

<template>
  <AppNav />
  <div class="max-w-[1080px] px-24px xl:px-0 mx-auto">
    <!-- <AppHeader class="mt-12px" /> -->
    <!-- <BaseBadge class="mt-14px" contentText="Front-end projects" :badge="true"/>  -->

  </div>

  <!-- <RouterView /> -->
</template>

<style>
</style>