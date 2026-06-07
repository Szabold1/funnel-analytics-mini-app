<script setup lang="ts">
withDefaults(
  defineProps<{
    classes?: string
    direction?: 'right' | 'down'
  }>(),
  {
    classes: 'size-5 text-gray-500 shrink-0',
    direction: 'right',
  },
)
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    :class="classes"
    :style="{ transform: direction === 'down' ? 'rotate(90deg)' : 'rotate(0deg)' }"
    class="transition-transform duration-200"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
</template>
