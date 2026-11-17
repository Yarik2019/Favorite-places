<script setup lang="ts">
import LayoutBase from '../components/Layouts/LayoutBase.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <LayoutBase>
    <NCard class="!w-md py-4 px-6 !rounded-2xl">
      <div class="flex gap-4 justify-center mb-10">
        <RouterLink
          to="/auth/signin"
          class="text-gray-link text-base font-bold"
          active-class="text-green-500"
          >Створити аккаунт</RouterLink
        >
        <RouterLink
          to="/auth/signup"
          class="text-link text-base font-bold"
          active-class="text-green-500"
          >Увійти</RouterLink
        >
      </div>
      <RouterView />
    </NCard>
  </LayoutBase>
</template>
