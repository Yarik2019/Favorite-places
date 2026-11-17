<script setup lang="ts">
import LayoutBase from '../components/Layouts/LayoutBase.vue'
import IButton from '../components/IButton/IButton.vue'
import LocationIcons from '../components/Icons/LocationIcons.vue'
</script>

<template>
  <LayoutBase>
    <div class="max-w-[500px] w-full text-white text-center align-center">
      <LocationIcons class="h-18 w-18 mx-auto mb-4" />
      <h1 class="mb-4.5 text-4xl font-bold leading-normal">IT traveler</h1>
      <p class="text-lg mb-11 font-normal leading-light">
        Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
        ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
      </p>
      <IButton variant="primary" to="/auth">Почати роботу</IButton>
    </div>
  </LayoutBase>
  <router-view />
</template>
