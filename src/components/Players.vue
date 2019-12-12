<template>
  <div id="types">
    <h1>Players</h1>
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
