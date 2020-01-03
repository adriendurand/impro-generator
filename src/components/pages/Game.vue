<template>
  <div id="game">
    <md-card id="game" class="md-layout-item md-small-size-100">
      <md-card-content>
        <div class="md-layout md-gutter">
          <Category ref="Category"/>
          <Type ref="Type"/>
          <Theme ref="Theme"/>
          <Player ref="Player"/>
          <Duration ref="Duration"/>
          <Player ref="Player"/>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-raised md-primary" v-on:click="createGame">Générer <md-icon>autorenew</md-icon></md-button>
      </md-card-actions>
    </md-card>
    <Countdown ref="Countdown"/>
  </div>
</template>

<script>
// Components
import Category from '@/components/Category'
import Theme from '@/components/Theme'
import Player from '@/components/Player'
import Type from '@/components/Type'
import Duration from '@/components/Duration'
import Countdown from '@/components/Countdown'

export default {
  name: 'Game',
  components: {
    'Category': Category,
    'Theme': Theme,
    'Player': Player,
    'Type': Type,
    'Duration': Duration,
    'Countdown': Countdown
  },
  data () {
    return {
      duration: '',
      player: '',
      type: ''
    }
  },
  mounted () {
    this.$refs.Countdown.setDuration(this.$refs.Duration.duration)
    this.$refs.Countdown.initCountdown()
  },
  watch: {
    $route: 'createGame'
  },
  methods: {
    createGame () {
      this.$refs.Category.refreshCategory()
      this.$refs.Duration.refreshDuration()
      this.$refs.Player.refreshPlayer()
      this.$refs.Theme.refreshTheme()
      this.$refs.Type.refreshType()
      this.$refs.Countdown.setDuration(this.$refs.Duration.duration)
      this.$refs.Countdown.initCountdown()
    }
  }
}
</script>

<style scoped>

</style>
