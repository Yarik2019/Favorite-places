<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { useThemeStore } from './stores/theme'
import { lightTheme, darkTheme } from 'naive-ui'
const themeStore = useThemeStore()
</script>

<template>
  <NConfigProvider :theme="themeStore.isActiveTheme ? darkTheme : lightTheme">
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-modal-provider>
            <n-dialog-provider>
              <RouterView />
            </n-dialog-provider>
          </n-modal-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </NConfigProvider>
</template>

<style scoped></style>
