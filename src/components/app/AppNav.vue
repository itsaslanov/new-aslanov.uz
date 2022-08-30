<script setup>
import { ref, onMounted } from "vue";
import { auth } from "@/firebase/index";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const pb0 = ref("");
let showMenu = ref(false);

const toggleNav = () => {
  if (!showMenu.value) {
    pb0.value = "pb-0";
    return (showMenu.value = true);
  }

  pb0.value = "";

  if (showMenu.value) {
    return (showMenu.value = false);
  }
};

const router = useRouter();
const isLoggedIn = ref(false);

const handleSignOut = () => {
  if (confirm("are you sure?")) {
    signOut(auth).then(() => {
      router.push("/");
    });
  }
};

const backToHome = () => {
  router.push("/");
};

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      router.push("/admin");
    } else {
      isLoggedIn.value = false;
    }
  });
});
</script>

<template>
  <div class="bg-gray md:bg-black">
    <nav
      class="max-w-[1080px] px-[14px] py-4 xl:px-0 mx-auto md:flex md:justify-between md:items-center"
      :class="pb0"
    >
      <div class="flex items-center justify-between bar">
        <!-- Logo -->
        <div class="cursor-pointer flex gap-2 items-center" @click="backToHome">
          <img class="w-[40px]" src="../../../public/favicon.png" alt="" />
          <span class="text-[18px] text-[#fff]">Aslanov's portfolio</span>
        </div>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button">
            <img src="../../assets/menu.svg" />
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="lg:px-0 flex-col mt-14px gap-0 md:flex md:space-y-0 md:flex-row md:items-center md:gap-20px md:mt-0 uppercase"
      >
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
        <li v-if="isLoggedIn">
          <RouterLink to="/admin">Admin</RouterLink>
        </li>
        <li>
          <button
            @click="handleSignOut"
            class="button text-[14px] bg-lightRed py-[12px] p-2 rounded-none hover:opacity-50 uppercase w-full md:py-[2px] md:rounded"
            v-if="isLoggedIn"
          >
            Log out
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
a.router-link-active {
  color: #86f3df;
}

a.router-link-active:hover {
  opacity: 1;
}

a {
  display: block;
  text-align: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  font-size: 14px;
  font-weight: 500;
}

a:hover {
  opacity: 0.5;
}

@media only screen and (max-width: 768px) {
  a.router-link-active {
    background-color: #86f3df;
    color: #070b0d;
  }

  a {
    margin: 0;
    padding: 14px 0;
    border-top: 1px solid #070b0d;
  }
}
</style>
