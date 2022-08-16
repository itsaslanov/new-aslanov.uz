<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import BaseButton from '../components/base/BaseButton.vue';

const inputFieldReset = ref(null);
const form = ref(null);

const sendToEmail = () => {
    emailjs.sendForm('service_id', 'template_id', form.value, 'qIzHieFa7Mryt3qMG')
        .then(() => {
            alert('Message sent!')
            inputFieldReset.value = "";
        }, (error) => {
            alert('Message not sent', error);
        });``
}

</script>

<template>
    <div class="max-w-[1080px] px-[14px] xl:px-0 mx-auto">
        <form @submit.prevent="sendToEmail" ref="form" class="flex flex-col gap-4 max-w-[600px] mx-auto">
            <h1 class="text-[24px] mb-[4px] mt-[14px] md:mt-[80px] flex gap-2 justify-center uppercase">Send your message to me</h1>

            <label class="block">
                <span class="block text-[14px] font-medium text-slate-700 mb-[4px]">Name:</span>
                <input type="text" name="user_name" :value="inputFieldReset"
                    class="border-[2px] px-[12px] py-[6px] w-full rounded border-lightBlue bg-black outline-none block focus:border-aqua" />
            </label>
            <label class="block">
                <span class="block text-[14px] font-medium text-slate-700 mb-[4px]">Email: <span
                        class="text-lightRed opacity-60">(please, add your own email to text you back)</span></span>
                <input type="email" name="user_email" :value="inputFieldReset"
                    class="border-[2px] px-[12px] py-[6px] w-full rounded border-lightBlue bg-black outline-none block focus:border-aqua" />
            </label>
            <label class="block">
                <span class="block text-[14px] font-medium text-slate-700 mb-[4px]">Message:</span>
                <textarea rows="10" type="text" name="message" :value="inputFieldReset"
                    class="border-[2px] px-[12px] py-[6px] w-full rounded border-lightBlue bg-black outline-none block focus:border-aqua" />
            </label>
            <BaseButton color="secondary" class="md:py-[6px] py-6px mb-[60px] md:mb-[80px]">
                <slot>
                    Send
                </slot>
            </BaseButton>
        </form>
    </div>
</template>
