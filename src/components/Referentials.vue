<template>
  <div id="referencials">
    <h1>Référentiels</h1>
    <b>DURATIONS</b>
    <ul>
      <li v-for="duration in durations" :key="duration">
        {{duration}}
      </li>
    </ul>

    <b>PLAYERS</b>
    <ul>
      <li v-for="player in players" :key="player">
        {{player}}
      </li>
    </ul>

    <b>TYPES</b>
    <ul>
      <li v-for="type in types" :key="type">
        {{type}}
      </li>
    </ul>

    <Categories />
    <Themes />
  </div>
</template>

<script>
// Components
import Categories from './Categories'
import Themes from './Themes'

// Assets
import durations from '@/assets/json/durations.json'
import players from '@/assets/json/players.json'
import types from '@/assets/json/types.json'

export default {
  name: 'Referenials',
  components: {
    'Categories': Categories,
    'Themes': Themes
  },
  data () {
    return {
      durations: durations,
      players: players,
      types: types,
      category: '',
      duration: '',
      player: '',
      theme: '',
      type: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
