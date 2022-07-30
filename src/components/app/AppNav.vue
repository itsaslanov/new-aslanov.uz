<script setup>
import { ref } from 'vue'

const pb0 = ref('')
let showMenu = ref(false)

const toggleNav = () => {

  if (!showMenu.value) {
    pb0.value = 'pb-0'
    return showMenu.value = true
  }

  pb0.value = ''

  if (showMenu.value) {
    return showMenu.value = false
  }
}

</script>


<template>
  <div class="bg-gray md:bg-black">
    <nav class="
        max-w-[1080px]
        mx-auto
        py-14px
        md:py-28px
        md:flex md:justify-between md:items-center
      " :class="pb0">
      <div class="flex items-center justify-between bar">
        <!-- Logo -->
        <h1></h1>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden px-24px xl:px-0">
          <button type="button">
            <img src="../../assets/menu.svg" />
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'" class="
          lg:px-0
          flex-col
          mt-14px
          gap-0
          md:flex md:space-y-0 md:flex-row md:items-center md:gap-20px md:mt-0 uppercase font-medium
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
@media only screen and (max-width: 768px) {

  a.router-link-active {
    background-color: #86F3DF;
    color: #070B0D;

  }

  a {
    margin: 0;
    padding: 14px 0;
    border-top: 1px solid #070B0D;
  }
}

a.router-link-active {
  color: #86F3DF;
}

a {
  display: block;
  text-align: center;
}
</style>