<script setup>
import { ref } from 'vue'; 
import BaseButton from '../base/BaseButton.vue';
import { firebaseAllData } from "../../use/firebaseAllData";

const { title, previewLink, hashtags, githubLink, uploadImg, hashtagsInput, onHashtagInputBlur, uploadImage, addCardToFirebase } = firebaseAllData();

const limited = ref(false);

// Send all data to Firestore
const onSubmit = async () => {
  // Call uploaded img function
  const imageUrl = await uploadImage(uploadImg.value.files[0]);

  // Type
  const type = "programming";

  await addCardToFirebase({
    date: Date.now(),
    img: imageUrl,
    hashtags: hashtags.value,
    title: title.value,
    githubLink: githubLink.value,
    previewLink: previewLink.value,
    type: type,
    limited: limited.value,
  });

  // Clear value
  hashtags.value = [];
  title.value = "";
  githubLink.value = "";
  previewLink.value = "";
  limited.value = "";
};

</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-[32px]">
    <label class="rounded border-aqua border-dashed border-[2px] bg-black py-[20px] cursor-pointer">
      <span class="flex flex-col justify-center items-center gap-[6px] mt-[25px] w-full">
        <img src="@/assets/img.svg" class="w-[58px] h-[58px]" alt="" />
        <span class="block">Drop your image here</span>
        <span class="block text-[13px] text-aqua">Image should be 1020x756px</span>
      </span>
      <input type="file" ref="uploadImg" class="invisible outline-none block" />
    </label>

    <label class="block">
      <span class="block text-[14px] font-medium text-slate-700 mb-[4px] opacity-40">Hashtags:</span>
      <input type="text" v-model="hashtagsInput" @blur="onHashtagInputBlur" @keyup.delete="onHashtagInputBlur"
        class="border-[2px] px-[12px] py-[6px] w-full rounded border-aqua bg-black outline-none block text-aqua" />
    </label>
    <label class="block">
      <span class="block text-[14px] font-medium text-slate-700 mb-[4px] opacity-40 dd">Title:</span>
      <input type="text" v-model="title"
        class="border-[2px] px-[12px] py-[6px] w-full rounded border-aqua bg-black outline-none block" />
    </label>
    <label class="block">
      <span class="block text-[14px] font-medium text-slate-700 mb-[4px] opacity-40">Github repo link:</span>
      <input type="text" v-model="githubLink"
        class="border-[2px] px-[12px] py-[6px] w-full rounded border-aqua bg-black outline-none block" />
    </label>
    <label class="block">
      <span class="block text-[14px] font-medium text-slate-700 mb-[4px] opacity-40">Preview link(Netlify):</span>
      <input type="text" v-model="previewLink"
        class="border-[2px] px-[12px] py-[6px] w-full rounded border-aqua bg-black outline-none block" />
    </label>
    <label class="flex gap-2 items-center">
      <span class="block text-[14px] font-medium text-slate-700 mb-[4px] bg-black opacity-40 rounded-[4px]">Top:</span>
      <input type="checkbox" v-model="limited"
        class="border-[2px] px-[12px] py-[6px] rounded custom-checkbox border-aqua outline-none block" />
    </label>
    <BaseButton class="w-full bg-aqua">Post a new card</BaseButton>
  </form>
</template>

<style scoped>
.bg-aqua {
  background-color: #86F3DF !important;
  color: #070B0D;
  font-weight: 600;
  padding: 10px 0px !important;
}


label:focus-within .opacity-40 {
  opacity: 1 !important;
}

.custom-transform {
  transform: translate(-50%, -50%);
}

</style>