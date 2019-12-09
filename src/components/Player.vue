<template>
  <div>
    <div class="md-layout-item md-small-size-100">
      <span class="title">Player:</span>
      <span> {{player}}</span>
      <md-button class="md-primary" @click="refreshPlayer"><md-icon>refresh</md-icon></md-button>
    </div>
  </div>
</template>

<script>
import players from '@/assets/json/players.json'

export default {
  name: 'Player',
  data () {
    return {
      players: players,
      player: ''
    }
  },
  created () {
    this.refreshPlayer()
  },
  watch: {
    $route: 'refreshPlayer'
  },
  methods: {
    refreshPlayer () {
      this.player = players[Math.floor(Math.random() * (players.length))]
    }
  }
}
</script>

<style scoped>

</style>
