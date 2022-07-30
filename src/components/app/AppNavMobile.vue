<script setup>
import { ref } from 'vue';


let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);

</script>


<template>
  <div class="">
    <nav class="
        max-w-[1080px]
        py-14px
        mx-auto
        md:flex md:justify-between md:items-center
      ">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <h1></h1>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button">
            <img src="../../assets/menu.svg" />
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'" class="
          flex-col
          md:flex md:space-y-0 md:flex-row md:items-center gap-20px md:mt-0 uppercase font-medium
        ">
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
  </div>
</template>

<style scoped>
a.router-link-active {
  color: #86F3DF;
}

a {
  display: block;
}

@media only screen and (max-width: 768px) {
  a.router-link-active {
    background-color: #86F3DF;
    color: #070B0D;
    padding: 14px 0;
  }
}
</style>