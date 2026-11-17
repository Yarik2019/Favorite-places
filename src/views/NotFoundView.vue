<script setup lang="ts">
import { NButton, NIcon } from 'naive-ui'
import ArrowLeftIcon from '../components/Icons/ArrowLeftIcon.vue'
</script>
<template>
  <div class="w-full h-screen flex justify-center items-center bg-green-500">
    <div class="text-center text-white">
      <h1 class="text-3xl font-bold mb-4">Сторінку не знайдено</h1>
      <p class="text-lg mb-6">Сторінка, яку ви шукаєте, не існує.</p>
      <NButton
        type="primary"
        strong
        secondary
        class="hover:!text-white !transition-all !duration-300"
        @click="$router.push('/')"
      >
        <template #icon>
          <NIcon>
            <ArrowLeftIcon class="w-5 h-5" />
          </NIcon>
        </template>
        На головну
      </NButton>
    </div>
  </div>
</template>
