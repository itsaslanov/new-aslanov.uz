<script setup>
import { ref } from 'vue'

const shortDescriptions = ref([
  {
    title: "Web front-end developer, with 2 years of experience."
  },
  {
    title: "Have a deep knowledge of UI/UX design."
  },
  {
    title: "Have great soft skills."
  }
])
</script>

<template>
  <div class="flex flex-col gap-12px md:gap-20px md:flex-row md:mt-0px">
    <div class="w-full md:max-w-[275px]">
      <img src="../../assets/person.png" class="w-full border border-lightBlue rounded-6px custom-box-shadow">
    </div>
    <div
      class="w-full bg-gray border border-lightBlue rounded-[6px] custom-box-shadow px-[14px] py-[20px] md:py-[42px] lg:px-[60px] flex flex-col gap-20px">
      <h2 class="uppercase text-[22px] text-22px font-medium">Azizbek Aslanov</h2>
      <ul class="flex flex-col gap-5px list-disc text-[16px] ml-12px font-normal">
        <li v-for="shortDescription of shortDescriptions">{{ shortDescription.title }}</li>
      </ul>
      <router-link class="text-[16px] text-aqua underline font-normal" to="/about">
        More about me?
      </router-link>
    </div>
  </div>
</template>

