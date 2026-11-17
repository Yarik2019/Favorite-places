export const mapSettings = {
  apiToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
  mapStyle: 'mapbox://styles/mapbox/streets-v12',
  mapCenter: [30.52, 50.45], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  mapZoom: 10,
  mapLanguage: 'uk',
}
