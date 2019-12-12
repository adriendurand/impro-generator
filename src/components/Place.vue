<template>
  <div>
    <div class="md-layout-item md-small-size-100">
      <span class="title">Lieu:</span>
      <span> {{place}}</span>
      <md-button class="md-primary" @click="refreshPlace"><md-icon>refresh</md-icon></md-button>
    </div>
  </div>
</template>

<script>
// Assets
import places from '@/assets/json/places.json'

export default {
  name: 'Place',
  data () {
    return {
      places: places,
      place: ''
    }
  },
  created () {
    this.refreshPlace()
  },
  watch: {
    $route: 'refreshPlace'
  },
  methods: {
    refreshPlace () {
      this.place = places[Math.floor(Math.random() * (places.length))]
    }
  }
}
</script>

<style scoped>

</style>
