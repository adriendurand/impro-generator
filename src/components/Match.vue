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
              <span>Dans la catégorie: {{category.title}}</span>
              <md-button class="md-primary" :disabled="(category.detail == '')" @click="showDialog = (category.detail != '')"><md-icon>help</md-icon></md-button>
              <md-button class="md-primary" @click="refreshCategory"><md-icon>refresh</md-icon></md-button>
            </div>
            <div class="md-layout-item md-small-size-100">
              <span>Improvisation:</span>
              <span>{{type}}</span>
              <md-button class="md-primary" @click="refreshType"><md-icon>refresh</md-icon></md-button>
            </div>
            <div class="md-layout-item md-small-size-100">
              <span>Ayant pour thème:</span>
              <span>{{theme}}</span>
              <md-button class="md-primary" @click="refreshTheme"><md-icon>refresh</md-icon></md-button>
            </div>
            <div class="md-layout-item md-small-size-100">
              <span>Nombre de joueurs:</span>
              <span>{{player}}</span>
              <md-button class="md-primary" @click="refreshPlayer"><md-icon>refresh</md-icon></md-button>
            </div>
            <div class="md-layout-item md-small-size-100">
              <span>Pour une durée de:</span>
              <span>{{duration}} minutes</span><md-button class="md-primary" @click="refreshDuration"><md-icon>refresh</md-icon></md-button>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button  class="md-icon-button md-dense md-raised md-primary" v-on:click="createMatch"><md-icon>autorenew</md-icon></md-button>
        </md-card-actions>
      </md-card>

      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>Détails</md-dialog-title>
        {{category.detail}}
      </md-dialog>

      <div class="container">
        <h1 id="head">Fin de l'impro dans:</h1>
        <ul>
          <li><span id="minutes">{{countdownMin}}</span> Minutes</li>
          <li><span id="seconds">{{countdownSec}}</span> Secondes</li>
        </ul>
        <md-card-actions>
          <md-button class="md-primary" v-on:click="removeTimer" :disabled="isMinTimer"><md-icon>remove</md-icon></md-button>
          <md-button class="md-primary" v-on:click="initCountdown" :disabled="!isPlaying" @click="isPlaying = false"><md-icon>stop</md-icon></md-button>
          <md-button class="md-primary" v-on:click="launchCountdown" :disabled="isPlaying" @click="isPlaying = true"><md-icon>play_arrow</md-icon></md-button>
          <md-button class="md-primary" v-on:click="addTimer"><md-icon>add</md-icon></md-button>
        </md-card-actions>
        <md-card-actions>
          <md-button class="md-primary" :disabled="isPlaying" @click="initCountdown"><md-icon>refresh</md-icon></md-button>
        </md-card-actions>
      </div>

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

import moment from 'moment'

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
      type: '',
      countdownMin: 0,
      countdownSec: 0,
      isPlaying: false,
      isMinTimer: false,
      tooltipActive: false,
      showDialog: false,
      x: ''
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
    refreshCategory () {
      this.category = categories[Math.floor(Math.random() * (categories.length))]
    },
    refreshDuration () {
      this.duration = durations[Math.floor(Math.random() * (durations.length))]
      this.initCountdown()
    },
    refreshPlayer () {
      this.player = players[Math.floor(Math.random() * (players.length))]
    },
    refreshTheme () {
      this.theme = themes[Math.floor(Math.random() * (themes.length))]
    },
    refreshType () {
      this.type = types[Math.floor(Math.random() * (types.length))]
    },
    createMatch () {
      this.refreshCategory()
      this.refreshDuration()
      this.refreshPlayer()
      this.refreshTheme()
      this.refreshType()
    },
    initCountdown () {
      this.isMinTimer = false
      this.duration = 2
      this.countdownMin = this.duration
      this.countdownSec = 0
      clearInterval(this.x)
    },
    launchCountdown () {
      var self = this
      var timer = moment().add((self.duration * 60) + 1, 's')

      self.x = setInterval(function () {
        var distance = Math.floor(moment.duration(timer.diff(moment())))

        self.countdownMin = Math.floor((distance % 3600000) / 60000)
        self.countdownSec = Math.floor((distance % 60000) / 1000)
        // console.log(self.countdownMin + ":" + self.countdownSec)

        if (distance <= 0) {
          clearInterval(self.x)
        }
      }, 1000)
    },
    removeTimer () {
      if (this.duration > 1) {
        this.duration--
        this.countdownMin = this.duration
      } 
      if (this.duration <= 1) {
        this.isMinTimer = true
      }
    },
    addTimer () {
      this.duration++
      this.countdownMin = this.duration
      this.isMinTimer = false
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

.container {
  text-align: center;
  margin: 0 auto;
}

h1 {
  font-weight: normal;
}

li {
  display: inline-block;
  font-size: 1.5em;
  list-style-type: none;
  padding: 1em;
  text-transform: uppercase;
}

li span {
  display: block;
  font-size: 4.5rem;
}
.md-dialog {
    max-width: 768px;
  }
</style>
