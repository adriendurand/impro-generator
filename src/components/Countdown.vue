<template>
   <div class="container">
      <h3 id="head">Fin dans:</h3>
      <ul>
        <li><span id="minutes">{{countdownMin}}</span> Minutes</li>
        <li><span id="seconds">{{countdownSec}}</span> Secondes</li>
      </ul>
      <md-card-actions>
        <md-button class="md-primary" v-on:click="removeTimer" :disabled="isMinTimer || isPlaying"><md-icon>remove</md-icon></md-button>
        <md-button class="md-primary" v-on:click="initCountdown" :disabled="!isPlaying" @click="isPlaying = false"><md-icon>stop</md-icon></md-button>
        <md-button class="md-primary" v-on:click="launchCountdown" :disabled="isPlaying" @click="isPlaying = true"><md-icon>play_arrow</md-icon></md-button>
        <md-button class="md-primary" v-on:click="addTimer" :disabled="isPlaying"><md-icon>add</md-icon></md-button>
      </md-card-actions>
    </div>
</template>

<script>
// Libraries
import moment from 'moment'

export default {
  name: 'Countdown',
  data () {
    return {
      duration: 0,
      countdownMin: 0,
      countdownSec: 0,
      isPlaying: false,
      isMinTimer: false,
      x: ''
    }
  },
  created () {
  },
  watch: {
  },
  methods: {
    setDuration (duration) {
      this.duration = duration
    },
    initCountdown () {
      clearInterval(this.x)

      this.isPlaying = false
      this.countdownMin = this.duration
      this.countdownSec = 0

      if (this.duration <= 1) {
        this.isMinTimer = true
      } else {
        this.isMinTimer = false
      }
    },
    launchCountdown () {
      var self = this
      // DEBUG
      // console.log('Launch count down ...')
      // console.log('Duration: ' + self.duration)
      // console.log('CountDownMin: ' + self.countdownMin)
      // console.log('CountDownSec: ' + self.countdownSec)

      var timer = moment().add((self.duration * 60) + 1, 's')

      self.x = setInterval(function () {
        var distance = Math.floor(moment.duration(timer.diff(moment())))

        self.countdownMin = Math.floor((distance % 3600000) / 60000)
        self.countdownSec = Math.floor((distance % 60000) / 1000)

        if (distance <= 0) {
          self.initCountdown()
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

<style scoped>
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
</style>
