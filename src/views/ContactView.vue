<script setup>
import { ref, inject, computed } from "vue";
import emailjs from "@emailjs/browser";
import BaseButton from "../components/base/BaseButton.vue";

const swal = inject("$swal");
const form = ref(null);

const name = ref("");
const email = ref("");
const textarea = ref("");

const sendForm = async () => {
  return await emailjs.sendForm(
    "service_id",
    "template_id",
    form.value,
    "qIzHieFa7Mryt3qMG"
  );
};

const sendToEmail = async () => {

  const nameCheck = name.value === "" ? "warningText" : "";
  const emailCheck = email.value === "" ? "warningText" : "";
  const textareaCheck = textarea.value === "" ? "warningText" : "";

  if (!nameCheck || !emailCheck || !textareaCheck) {
    return
  }

  swal.fire({
      icon: "error",
      title: `<span class="text-[18px]">Oops...</span>`,
      html: `<ul class="text-[14px] text-lightRed"><li>${nameCheck} ${emailCheck} ${textareaCheck}</li></ul>`,
      confirmButtonText: "Got it!",
  });

  if (nameCheck || emailCheck || textareaCheck) {
    return
  }

  swal.fire({
    position: "center",
    icon: "success",
    html: `<span class="text-[18px]">Your message has been sent</span>`,
    showConfirmButton: false,
    timer: 1500,
  });

  await sendForm();
  name.value = "";
  email.value = "";
  textarea.value = "";
};
</script>

<template>
  <div class="max-w-[1080px] px-[14px] xl:px-0 mx-auto">
    <form
      @submit.prevent="sendToEmail"
      ref="form"
      class="flex flex-col gap-4 max-w-[600px] mx-auto"
    >
      <h1
        class="text-[24px] mb-[4px] mt-[14px] md:mt-[80px] flex gap-2 justify-center uppercase"
      >
        Send your message to me
      </h1>

      <label class="block">
        <span class="block text-[14px] font-medium text-slate-700 mb-[4px]">Name:</span>
        <input
          type="text"
          name="user_name"
          v-model="name"
          class="border-[2px] px-[12px] py-[6px] w-full rounded border-lightBlue bg-black outline-none block focus:border-aqua"
        />
      </label>
      <label class="block">
        <span class="block text-[14px] font-medium text-slate-700 mb-[4px]"
          >Email:
          <span class="text-aqua"
            >(please, add your own email to text you back)</span
          ></span
        >
        <input
          type="email"
          name="user_email"
          v-model="email"
          class="border-[2px] px-[12px] py-[6px] w-full rounded border-lightBlue bg-black outline-none block focus:border-aqua"
        />
      </label>
      <label class="block">
        <span class="block text-[14px] font-medium text-slate-700 mb-[4px]"
          >Message:</span
        >
        <textarea
          rows="10"
          type="text"
          v-model="textarea"
          name="message"
          class="border-[2px] px-[12px] py-[6px] w-full rounded border-lightBlue bg-black outline-none block focus:border-aqua"
        />
      </label>
      <BaseButton color="secondary" class="md:py-[6px] py-6px mb-[60px] md:mb-[80px]">
        <slot> Send </slot>
      </BaseButton>
    </form>
  </div>
</template>
