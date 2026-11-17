<script setup lang="ts">
import { NForm, NInput, NButton } from 'naive-ui'
import { reactive } from 'vue'
const formValue = reactive({
  email: '',
  password: '',
})

const handleSubmit = () => {
  console.log('Form submitted with values:', formValue)
}
</script>
<template>
  <NForm
    :model="formValue"
    @submit.prevent="handleSubmit"
    class="flex flex-col justify-between h-[300px]"
  >
    <div>
      <div class="flex flex-col gap-2 mb-5">
        <label for="email" class="text-gray-dark font-normal text-xs leading-normal">Email</label>
        <NInput
          id="email"
          v-model:value="formValue.email"
          placeholder="Email"
          class="text-sm !text-gray-dark font-normal leading-normal rounded-2xl border-2 border-gray-300 focus:outline-range-500 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-gray-dark font-normal text-xs leading-normal"
          >Password</label
        >
        <NInput
          id="password"
          v-model:value="formValue.password"
          placeholder="Password"
          type="password"
          class="text-sm !text-gray-dark font-normal leading-normal rounded-2xl border-2 border-gray-300 focus:outline-range-500 focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
    <NButton type="primary" attr-type="submit" class="!w-full !mt-10 !rounded-xl">Увійти</NButton>
  </NForm>
</template>
