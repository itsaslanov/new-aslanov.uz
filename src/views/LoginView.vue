<script setup>
import { ref, onMounted } from 'vue';
import BaseButton from '../components/base/BaseButton.vue';
import { useRouter } from "vue-router";
import { auth } from "../firebase/index";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const router = useRouter();
const isLoggedIn = ref(false);

// Login and Password's value
const email = ref("");
const password = ref("");
const currentStatus = ref("");
const errMsg = ref("");

const onSubmit = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      router.push("/admin");
      currentStatus.value = "is-primary";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      errMsg.value = "email or password was incorrect";
      currentStatus.value = "border-lightRed";
      return;
    });
};

onMounted(async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push("/admin");
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

</script>

<template>
  <div class="absolute h-full w-full top-0 left-0 bg-black">
    <div class="m-[20px] w-fit">
      <RouterLink class="hover:opacity-50 transition-all" to="/">
        <span class="flex w-max gap-[6px] text-[18px]">
          <img src="../assets/arrow.svg" class="rotate-180 w-[24px]" alt="">
          Back to Home
        </span>
      </RouterLink>
    </div>

    <form @submit.prevent="onSubmit" class="absolute top-[50%] left-[50%] custom-transform flex flex-col gap-4 w-[400px]">
      <h1 class="text-[34px] text-center mb-[8px]">Log in</h1>
      <label class="block">
        <span class="block text-[14px] font-medium text-slate-700 mb-[4px]">Email:</span>
        <input type="text" v-model="email" :class="currentStatus"
          class="border-[2px] px-[12px] py-[6px] w-full rounded border-lightBlue bg-black outline-none block focus:border-aqua" />
      </label>

      <label class="block w-full">
        <span class="block text-[14px] font-medium text-slate-700 mb-[4px]">Password:</span>
        <input type="password" v-model="password" :class="currentStatus"
          class="border-[2px] px-[12px] py-[6px] w-full rounded border-lightBlue bg-black outline-none block focus:border-aqua" />
      </label>

      <p v-if="errMsg" class="text-lightRed">{{ errMsg }}</p>

      <BaseButton color="secondary" class="md:py-[6px] py-6px">
        <slot>
          Enter
        </slot>
      </BaseButton>
    </form>
  </div>
</template>

<style scoped>
.custom-transform {
  transform: translate(-50%, -50%);
}
</style>