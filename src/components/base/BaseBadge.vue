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
  <div class="flex gap-[5px]">
    <h1 class="text-[24px] text-aqua">{{ contentText }}</h1>
    <span :class="badgeClass"
      class="uppercase bg-lightRed h-max px-12px py-2px rounded-[4px] self-center font-bold">Top</span>
  </div>
</template>