<script setup lang="ts">
import { NButton, NForm, NIcon } from 'naive-ui'
import { computed, reactive, ref } from 'vue'
import { usePlaceStore } from '@/stores/place.ts'
const file = ref<File | null>(null)
const placeStore = usePlaceStore()

const props = defineProps<{
  item: {
    id: number
    title: string
    description: string
    icon: string
  }
}>()

const formValue = ref({
  title: props.item.title,
  description: props.item.description,
  icon: file.value,
})

const renderIcon = computed(() => props.item.icon)

const handleFileChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  file.value = input.files?.[0] ?? null
}

const previewUrl = computed(() => {
  if (!file.value) return null
  return URL.createObjectURL(file.value)
})

const handleEditSubmit = () => {
  placeStore.editPlaceById(props.item.id, formValue.value)
  console.log('Editing place with ID:', file.value)
  console.log(formValue.value)
}
</script>

<template>
  <NForm :model="formValue" @submit.prevent="handleEditSubmit">
    <div class="relative group">
      <div class="flex justify-center mb-5 relative overflow-hidden z-10 !w-full !h-[300px]">
        <template v-if="previewUrl">
          <img :src="previewUrl" class="w-full h-full object-cover" alt="image" />
        </template>
        <template v-else>
          <component :is="renderIcon" class="!contents !w-full !h-full" />
        </template>
      </div>
      <div
        class="absolute inset-0 bg-black/40 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <input type="file" @change="handleFileChange" accept="image/png, image/jpeg, image/svg" />
      </div>
    </div>
    <NFormItem label="Title" name="title">
      <NInput v-model:value="formValue.title" />
    </NFormItem>
    <NFormItem label="Description" name="description">
      <NInput v-model:value="formValue.description" />
    </NFormItem>
    <NButton attr-type="submit" type="primary" class="!w-full"> Зберегти зміни </NButton>
  </NForm>
</template>
