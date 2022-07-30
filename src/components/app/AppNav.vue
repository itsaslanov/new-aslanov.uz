<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="my-20px flex justify-between max-w-[1080px] m-auto">
      <!-- Logo -->
      <div></div>
      <!-- All menu links -->
      <ul class="flex uppercase gap-5 font-medium">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/projects">Projects</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
      </ul>
  </nav>
</template>

<style scoped>
  a.router-link-active {
    color: #86F3DF;
  }

  /* a {
    color: red;
  } */
</style>