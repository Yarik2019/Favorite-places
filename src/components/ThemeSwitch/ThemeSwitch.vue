<script setup lang="ts">
import { NButton } from 'naive-ui'
import SunIcon from '../Icons/SunIcon.vue'
import MoonIcon from '../Icons/MoonIcon.vue'
import { useThemeStore } from '../../stores/theme'

const themeStore = useThemeStore()
</script>

<template>
  <NSpace>
    <NButton
      type="primary"
      class="w-22 transition-all duration-300"
      :class="themeStore.isActiveTheme ? '!bg-black-rgb' : '!bg-white'"
      strong
      secondary
      circle
      @click="themeStore.handleThemeChange"
    >
      <SunIcon v-if="themeStore.isActiveTheme" class="w-22" />
      <MoonIcon v-else class="w-22" />
    </NButton>
  </NSpace>
</template>
