<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/">
      <span>{{button1}}</span>
    </router-link>
    </br>
    </br>
    
    <button v-on:click="createMatch">Generate</button> </br></br>
    <b>Type:</b> {{type}} </br>
    <b>Theme:</b> {{theme}} </br>
    <b>Number of players:</b> {{player}} </br> 
    <b>Duration:</b> {{duration}} </br>
    <b>Category:</b> {{category}} </br> </br>

    </br>
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

    <b>THEMES</b>
    <ul>
      <li v-for="theme in themes" :key="theme">
        {{theme}}
      </li>
    </ul>

    <b>CATEGORIES</b>
    <ul>
      <li v-for="category in categories" :key="category">
        {{category}}
      </li>
    </ul>
  </div>
</template>

<script>
import categories from '../assets/json/categories.json'
import durations from '../assets/json/durations.json'
import players from '../assets/json/players.json'
import themes from '../assets/json/themes.json'
import types from '../assets/json/types.json'

export default {
  name: 'Match',
  data () {
    return {
      msg: 'Bienvenue sur votre générateur de match d\'improvisation',
      button1: 'Accueil',
      categories: categories,
      durations: durations,
      players: players,
      themes: themes,
      types: types,
      category: '',
      duration: '',
      player: '',
      theme: '',
      type: ''
    }
  },
  created () {
    this.createMatch()
  },
  watch: {
    $route: 'createMatch'
  },
  methods: {
    randomNumber: function (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    },
    createMatch () {
      this.category = categories[Math.floor(Math.random() * (categories.length))]
      this.duration = durations[Math.floor(Math.random() * (durations.length))]
      this.player = players[Math.floor(Math.random() * (players.length))]
      this.theme = themes[Math.floor(Math.random() * (themes.length))]
      this.type = types[Math.floor(Math.random() * (types.length))]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
