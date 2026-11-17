import { defineStore } from 'pinia'
import LookImg from '../assets/img/Look.png'

// interface Place {
//     places: Place[]

// }
interface Place {
  places: {
    id: number
    title: string
    description: string
    icon: string
    lngLat: [number, number]
  }[]
}

export const usePlaceStore = defineStore('placesMap', {
  state: (): Place => ({
    places: [
      {
        id: 1,
        title: 'asdqwqwe qwssea qweqwe',
        description:
          'Проєкт української влади, який ініціювали у листопаді 2022 року на фоні масованих обстрілів критичної інфраструктури з боку Росії під час російсько-української війни.',
        icon: LookImg,
        lngLat: [30.6, 50.45],
      },
      {
        id: 2,
        title: 'Example Place',
        description:
          'Проєкт української влади, який ініціювали у листопаді 2022 року на фоні масованих обстрілів критичної інфраструктури з боку Росії під час російсько-української війни.',
        icon: LookImg,
        lngLat: [30.55, 50.45],
      },
      {
        id: 3,
        title: 'Example Place',
        description:
          'Проєкт української влади, який ініціювали у листопаді 2022 року на фоні масованих обстрілів критичної інфраструктури з боку Росії під час російсько-української війни.',
        icon: LookImg,
        lngLat: [30.45, 50.45],
      },
      {
        id: 4,
        title: 'Example Place',
        description:
          'Проєкт української влади, який ініціювали у листопаді 2022 року на фоні масованих обстрілів критичної інфраструктури з боку Росії під час російсько-української війни.',
        icon: LookImg,
        lngLat: [30.56, 50.45],
      },
    ],
  }),
  getters: {
    palcesLengh: (state) => state.places.length,
  },
  actions: {
    deletePlaceById(id: number) {
      this.places = this.places.filter((place) => place.id !== id)
    },
    editPlaceById(id: number, updatedPlace: any) {
      const place = this.places.find((place) => place.id === id)
      const newPlace = { ...place, ...updatedPlace }

      console.log(newPlace)
    },
    newCreatePlace(newPlace: any) {
      console.log(newPlace)
      this.places = [...this.places, newPlace]
    },
  },
})
