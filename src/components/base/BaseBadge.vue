<script setup>
import { computed } from 'vue'

const props = defineProps({
  contentText: {
    type: String
  },
  badge: {
    type: Boolean,
    default: false
  }
})

const badgeClass = computed(() => {
  if (props.badge === false) {
    return 'hidden'
  } else {
    'block'
  }
})

</script>

<template>
  <div class="flex gap-[8px]">
    <h1 class="text-[20px] text-aqua self-center">{{ contentText }}</h1>
    <span :class="badgeClass"
      class="uppercase bg-lightRed h-max px-6px py-2px rounded-[4px] self-center text-[14px]">Top</span>
  </div>
</template>