<script setup lang="ts">
import { NModal } from 'naive-ui'
import { computed } from 'vue'

const emit = defineEmits(['close'])
const props = defineProps({
  place: {
    type: Object,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
})

console.log(props.place)

const showModal = computed(() => {
  get: () => props.isOpen
  set: (value) => emit('close')
})

console.log(props.isOpen)
</script>
<template>
  <NModal v-model:show="showModal">
    <div>
      <h2>{{ props.place.title }}</h2>
      <p>{{ props.place.description }}</p>
    </div>
  </NModal>
</template>
