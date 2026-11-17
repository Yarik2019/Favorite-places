<script setup lang="ts">
import { computed, ref } from 'vue'
import { defineEmits } from 'vue'
import { mapSettings } from '../../map/setting.js'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import LocationIcons from '../Icons/LocationIcons.vue'
const mapMarkerLngLat = ref(null)

const emit = defineEmits(['locationPlace', 'checkedMarkerId'])

interface PropsType {
  favoritePlaces: any[]
  isActiveMarker?: 'active' | 'default'
}

const props = withDefaults(defineProps<PropsType>(), {
  isActiveMarker: 'default',
})

const isActiveMarker = computed(() => (props.isActiveMarker === 'active' ? 'w-8 h-8' : 'w-6 h-6 '))

//  const lngLat =  mapInstance.flyTo()
const handleClickMarkerLngLat = ({ lngLat }: { lngLat: { lat: number; lng: number } }) => {
  mapMarkerLngLat.value = [lngLat.lng, lngLat.lat]
  emit('checkedMarkerId', [lngLat.lng, lngLat.lat])
}

const lacalPalace = (e: any) => {
  console.log(e)
  emit('locationPlace', e)
}
</script>

<template>
  <MapboxMap
    :access-token="mapSettings.apiToken"
    :style="mapSettings.mapStyle"
    :zoom="mapSettings.mapZoom"
    :center="mapSettings.mapCenter"
    :language="mapSettings.mapLanguage"
    @mb-created="(mapInstance) => lacalPalace((map = mapInstance))"
    @mb-click="handleClickMarkerLngLat"
    class="w-full h-full"
  >
    <MapboxMarker v-for="place in props.favoritePlaces" :lngLat="place.lngLat" :key="place.id">
      <LocationIcons class="h-6 w-6 text-green-500" :class="isActiveMarker" />
    </MapboxMarker>
    <MapboxMarker v-if="mapMarkerLngLat" :lngLat="mapMarkerLngLat">
      <LocationIcons class="h-6 w-6 text-blue-500" />
    </MapboxMarker>
  </MapboxMap>
</template>
