<script setup>
import BaseButton from "../base/BaseButton.vue";
import { firebaseAllData } from "../../use/firebaseAllData";

const { title, previewLink, hashtags, uploadImg, hashtagsInput, onHashtagInputBlur, uploadImage, addCardToFirebase } = firebaseAllData();

// Send all data to Firestore
const onSubmit = async () => {
  // Call uploaded img function
  const imageUrl = await uploadImage(uploadImg.value.files[0]);
  // Type
  const type = "designing";

  await addCardToFirebase({
    img: imageUrl,
    hashtags: hashtags.value,
    title: title.value,
    previewLink: previewLink.value,
    type: type,
  });

  // Clear value
  hashtags.value = [];
  title.value = "";
  previewLink.value = "";
};
</script>

<template>
  <form class="flex flex-col gap-[32px]" @submit.prevent="onSubmit">
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
      <input v-model="hashtagsInput" @blur="onHashtagInputBlur" type="text"
        class="border-[2px] px-[12px] py-[6px] w-full rounded border-aqua bg-black outline-none block text-aqua" />
    </label>
    <label class="block">
      <span class="block text-[14px] font-medium text-slate-700 mb-[4px] opacity-40 dd">Title:</span>
      <input v-model="title" type="text"
        class="border-[2px] px-[12px] py-[6px] w-full rounded border-aqua bg-black outline-none block" />
    </label>
    <label class="block">
      <span class="block text-[14px] font-medium text-slate-700 mb-[4px] opacity-40">Behance link:</span>
      <input v-model="previewLink" type="text"
        class="border-[2px] px-[12px] py-[6px] w-full rounded border-aqua bg-black outline-none block" />
    </label>
    <BaseButton class="w-full bg-aqua mb-[0px] md:mb-[64px]">Post a new card</BaseButton>
  </form>
</template>

<style scoped>
.bg-aqua {
  background-color: #86f3df !important;
  color: #070b0d;
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
