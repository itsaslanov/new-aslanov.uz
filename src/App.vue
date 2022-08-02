<script setup>
import { RouterView } from 'vue-router'
import AppNav from './components/app/AppNav.vue'
import AppHeader from './components/app/AppHeader.vue'
import BaseBadge from './components/base/BaseBadge.vue';
import BaseButton from './components/base/BaseButton.vue';
import AppCardContent from './components/app/AppCardContent.vue';

</script>

<template>
  <AppNav />
  <div class="max-w-[1080px] px-24px xl:px-0 mx-auto">
    <!-- <AppHeader class="mt-12px" /> -->

    <!-- <BaseBadge class="mt-14px" contentText="Front-end projects" :badge="true"/>  -->

    <!-- <BaseButton color="default">
      <img src="../src/assets/github.svg" alt="github" />
      <span>Github</span>
    </BaseButton> -->

    <!-- <BaseButton color="primary">
    <img src="../src/assets/eye-line.svg" alt="eye-line"/>
      <span>Preview </span>
    </BaseButton> -->

    <AppCardContent></AppCardContent>


  </div>

  <!-- <RouterView /> -->
</template>

<style>
</style>