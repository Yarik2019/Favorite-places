<script setup lang="ts">
import { defineEmits } from 'vue'
import { reactive } from 'vue'
import { defineProps } from 'vue'
import { usePlaceStore } from '@/stores/place.ts'
import { storeToRefs } from 'pinia'

const emit = defineEmits(['submit'])
const props = defineProps({
  lngLat: {
    type: Array<[number, number]>,
    default: () => [0, 0],
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})
const placeStore = usePlaceStore()
const { places } = storeToRefs(placeStore)

const { newCreatePlace } = placeStore
const formValue = reactive({
  title: '',
  description: '',
  icon: null,
  lngLat: props.lngLat,
})

const handleEditSubmit = () => {
  newCreatePlace({ id: Date.now(), ...formValue })
  console.log(places.value)
}
</script>
<template>
  <div>
    <NForm :model="formValue" @submit.prevent="handleEditSubmit">
      <NFormItem label="Локація " name="title">
        <NInput v-model:value="formValue.title" />
      </NFormItem>
      <NFormItem label="Опис" name="description">
        <NInput v-model:value="formValue.description" />
      </NFormItem>
      <NButton attr-type="submit" type="primary" class="!w-full"> Зберегти зміни </NButton>
    </NForm>
  </div>
</template>
