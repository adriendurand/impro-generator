<template>
  <div>
      <md-field>
        <label class="title">Nombre de joueurs:</label>
        <md-input class="md-input-override" v-model="player" readonly/>
        <md-button class="md-icon-button md-primary" @click="refreshPlayer"><md-icon>refresh</md-icon></md-button>
      </md-field>
  </div>
</template>

<script>
// Assets
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
