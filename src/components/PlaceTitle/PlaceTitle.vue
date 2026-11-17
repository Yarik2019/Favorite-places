<script setup lang="ts">
import { computed, ref } from 'vue'

import { usePlaceStore } from '@/stores/place.ts'

import InfoIcon from '../../components/Icons/InfoIcon.vue'
import EditIcon from '../../components/Icons/EditIcon.vue'
import DeleteIcon from '../../components/Icons/DeleteIcon.vue'
import { NCard, NModal } from 'naive-ui'
import EditForm from '../EditForm/EditForm.vue'
const isModalInfo = ref(false)
const isModalEdit = ref(false)
const isModalDelete = ref(false)
const placeStore = usePlaceStore()

const props = defineProps<{
  options: {
    id: number
    title: string
    description: string
    icon: any
  }
}>()

const truncateTextComputed = computed(() => {
  const words = props.options.title.split(' ')
  return words.length > 2 ? words.slice(0, 2).join(' ') + '...' : props.options.title
})
/// Handle delete action
const handleDelete = (id: number) => {
  isModalDelete.value = true
  console.log('Delete place with ID:', id)
}

const onPositiveClick = () => {
  placeStore.deletePlaceById(props.options.id)
  console.log('Positive click', props.options.id)
}
const onNegativeClick = () => {
  isModalDelete.value = false
}
//// Handle edit action
const handleEdit = (id: number) => {
  isModalEdit.value = true
  console.log('Edit place with ID:', id)
}

// Handle info action
const handleInfo = (id: number) => {
  isModalInfo.value = true
  console.log('Info place with ID:', id)
}
const renderIcon = computed(() => props.options.icon)
console.log(props.options.icon)
</script>
<template>
  <div class="flex justify-between items-center">
    <h3 class="text-sm font-semibold leading-normal">{{ truncateTextComputed }}</h3>
    <div class="flex gap-2">
      <InfoIcon
        class="w-5 h-5 cursor-pointer hover:text-orange-500 transition-all duration-300"
        @click.stop="handleInfo(props.options.id)"
      />
      <EditIcon
        class="w-4 h-4 cursor-pointer hover:text-blue-500 transition-all duration-300"
        @click.stop="handleEdit(props.options.id)"
      />
      <DeleteIcon
        class="w-4 h-4 cursor-pointer hover:text-red-500 transition-all duration-300"
        @click.stop="handleDelete(props.options.id)"
      />
    </div>
    <NModal
      v-model:show="isModalInfo"
      preset="card"
      class="!w-md !px-2 !pb-1 !rounded-2xl !shadow-lg"
      :title="props.options.title"
    >
      <div class="w-full h-[300px] mb-3 flex justify-center rounded-lg overflow-hidden">
        <component :is="renderIcon" class="!w-full !h-full !contents !object-cover" alt="image" />
      </div>
      <p class="text-base font-normal leading-normal">{{ props.options.description }}</p>
    </NModal>
    <NModal
      v-model:show="isModalEdit"
      preset="card"
      class="!w-md !px-2 !pb-1 !rounded-2xl !shadow-lg"
      title="Виготові відрегадувати дані?"
    >
      <EditForm :item="props.options" />
    </NModal>
    <NModal
      v-model:show="isModalDelete"
      class="!w-md !rounded-2xl !shadow-lg"
      title="Видалити улюблене місце"
      preset="dialog"
      positive-text="Видалити"
      negative-text="Скасувати"
      @positive-click="onPositiveClick"
      @negative-click="onNegativeClick"
    />
  </div>
</template>
