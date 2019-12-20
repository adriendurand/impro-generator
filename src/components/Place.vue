<template>
  <div>
      <md-field>
        <label class="title">Lieu:</label>
        <md-input class="md-input-override" v-model="place" />
        <md-button class="md-icon-button md-primary" @click="refreshPlace"><md-icon>refresh</md-icon></md-button>
      </md-field>
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
