<script>
const COLORS = ["is-default", "is-primary", "is-secondary"];
</script>

<script setup>
import { computed } from 'vue'

const { color } = defineProps({
  color: {
    type: String,
    default: () => 'default',
    validation: (value) => COLORS.includes(value),
  }
})

const classes = computed(() => {
  return {
     [`is-${color}`]: true,
  }
})
</script>

<template>
  <button :class="classes" class="base-button flex gap-2 w-[110px] justify-center rounded">
    <slot></slot>
  </button>
</template>

<style lang="postcss">
.base-button.is-default {
  @apply bg-darkBlue transition-all hover:opacity-50;
}

.base-button.is-primary {
  @apply bg-green transition-all hover:opacity-50;
}

.base-button.is-secondary {
  @apply bg-blue transition-all hover:opacity-50;
}
</style>