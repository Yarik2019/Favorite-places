<script setup lang="ts">
import { h, ref } from 'vue'
// import type { Component } from 'vue'
import type { MenuOption } from 'naive-ui'
import MapBox from '../components/MapBox/MapBox.vue'
import { NIcon, NLayout, NMenu } from 'naive-ui'
import PlaceTitle from '@/components/PlaceTitle/PlaceTitle.vue'
import NewPlace from '@/components/NewPlace/NewPlace.vue'
import LookImg from '../assets/img/Look.png'
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch.vue'
import { usePlaceStore } from '@/stores/place.ts'

const collapsed = ref(true)
const mapInstance = ref(null)
const newPlacePosition = ref(null)
const checkedMarkerActive = ref(null)
const checkedMarkerlngLat = ref(null)
const isModalNewCreate = ref(false)
const emit = defineEmits(['theme-changed'])

// function renderIcon(icon: Component) {
//   return () => h(NIcon, null, { default: () => h(icon) })
// }

function renderIcon(src: string) {
  return () =>
    h(NIcon, null, {
      default: () =>
        h('img', {
          src,
        }),
    })
}

const { places } = usePlaceStore()

const mapPlaces = places.map((place) => ({
  ...place,
  icon: renderIcon(place.icon),
}))

const menuOptions: MenuOption[] = mapPlaces.map((place) => ({
  key: place.id,
  title: () =>
    h(PlaceTitle, {
      options: {
        id: place.id,
        title: place.title,
        description: place.description,
        icon: place.icon,
      },
    }),
  description: place.description,
  icon: renderIcon(LookImg),
  lngLat: place.lngLat,
}))

const handleMapReady = (map: any) => {
  mapInstance.value = map
  newPlacePosition.value = map
}

const handleMenuClick = (menuId: string | number) => {
  const place = mapPlaces.find((p) => p.id === menuId)
  mapInstance.value.flyTo({ center: place.lngLat })
}
const handleNewPlace = () => {
  isModalNewCreate.value = true
}
</script>
<template>
  <div class="relative h-screen w-full">
    <MapBox
      :favorite-places="mapPlaces"
      :is-active-marker="checkedMarkerActive"
      @location-place="handleMapReady"
      @checked-marker-id="checkedMarkerlngLat = $event"
    />
    <NLayout
      has-sider
      class="m-slider-container !absolute !z-30 left-0 top-0 h-full transition-all duration-300"
    >
      <NLayoutSider
        bordered
        collapse-mode="width"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <NMenu
          :collapsed="collapsed"
          :options="menuOptions"
          :collapsed-icon-size="22"
          key-field="key"
          @update:value="handleMenuClick"
          label-field="title"
          children-field="description"
        />
        {{ console.log(menuOptions) }}
        <div class="!px-4">
          <NButton type="success" class="!w-full" @click="handleNewPlace"> Create Place </NButton>
        </div>
      </NLayoutSider>
      <NLayout />
    </NLayout>
    <ThemeSwitch @theme-changed="emit('theme-changed')" class="!absolute !top-3 !right-3" />
    <NModal
      v-model:show="isModalNewCreate"
      preset="card"
      class="!w-md !px-2 !pb-1 !rounded-2xl !shadow-lg"
    >
      <NewPlace :lng-lat="checkedMarkerlngLat" :is-active="isModalNewCreate" />
    </NModal>
  </div>
</template>
