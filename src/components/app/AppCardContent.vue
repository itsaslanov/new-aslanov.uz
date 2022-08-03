<script setup>
import BaseCard from "../base/BaseCard.vue";

const cards = [
  {
    img: "",
    hashtags: [
      {
        hash: "Vue.js",
      },
      {
        hash: "Pinia",
      },
      {
        hash: "Firebase",
      },
    ],
    title: "APP",
  },
  {
    title: "Yeah",
  },
  {
    title: "hey",
  },
  {
    title: "hey",
  },
];
</script>

<template>
  <div class="grid-sys">
    <BaseCard v-for="card of cards" :key="card.id">
      <template #image>
        <img src="../../assets/img/project.png" class="rounded-t-6px" alt="" />
      </template>

      <template #hashtag>
        <div v-for="hashtag of card.hashtags" :key="card.id">{{ hashtag.hash }}</div>
      </template>

      <template #title>
        {{ card.title }}
      </template>
    </BaseCard>
  </div>
</template>

<style>
.grid-sys {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>

<!-- <img src='../../assets/img/project.png' class=' rounded-t-[6px]' alt='' /> -->
<!-- <template #image>
     
      </template>
      <template #hashtag>

      </template> -->
