<template>
  <div>
    <form novalidate class="md-layout">
      <md-card id="match" class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Match</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="category">Dans la catégorie:</label>
                <md-textarea id="category" v-model="category"></md-textarea>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="type">Improvisation:</label>
                <md-input id="type" type="text" v-model="type"/>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="theme">Ayant pour thème:</label>
                <md-input id="theme" type="text" v-model="theme"/>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="player">Nombre de joueurs:</label>
                <md-input id="player" type="text" v-model="player"/>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="duration">Pour une durée de:</label>
                <md-input id="duration" type="text" v-model="duration"/>
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button class="md-primary" v-on:click="createMatch">Nouvelle manche</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
// Assets
import themes from '../assets/json/themes.json'
import categories from '../assets/json/categories.json'
import durations from '../assets/json/durations.json'
import players from '../assets/json/players.json'
import types from '../assets/json/types.json'

export default {
  name: 'Match',
  components: {
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

  textarea {
    border: 1px solid #888;
    outline: none;
    resize: none;
    overflow: auto;
    height: 8rem;
    width: 25em;
  }
</style>
