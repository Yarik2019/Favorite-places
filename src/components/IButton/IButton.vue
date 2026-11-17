<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'gradient', 'outlined'].includes(value),
  },
  to: {
    type: String,
    default: null,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})
const baseStyles =
  props.variant === `gradient`
    ? 'bg-gradient-to-r from-[#FFA279] to-[#F37430]'
    : 'bg-orange-400 hover:bg-orange-400-hover'
const isLink = computed(() => !!props.to)
const componentName = computed(() => (isLink.value ? RouterLink : 'button'))

const link = computed(() => {
  return isLink.value ? props.to : undefined
})
</script>

<template>
  <component
    :is="componentName"
    :type="type"
    :to="link"
    class="text-white py-3.5 px-10 font-inter font-bold text-base cursor-pointer rounded-xl tracking-tighter transition-all duration-300"
    :class="baseStyles"
  >
    <template v-if="props.isLoading">
      <div>Loading...</div>
    </template>
    <template v-else>
      <slot />
    </template>
  </component>
</template>
