<template>
  <div id="types">
    <h3>Nombre de joueurs</h3>
    <ul>
      <li v-for="player in players" :key="player">
        {{player}}
      </li>
    </ul>
  </div>
</template>

<script>
// Assets
import players from '@/assets/json/players.json'

export default {
  name: 'Players',
  data () {
    return {
      players: players
    }
  }
}
</script>

<style scoped>

</style>
