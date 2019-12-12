<template>
  <div id="match">
    <form novalidate class="md-layout">
      <md-card id="match" class="md-layout-item md-size-50 md-small-size-100">
        <md-card-content>
          <div class="md-layout md-gutter">
            <Category ref="Category" />
            <Type ref="Type" />
            <Theme ref="Theme" />
            <Player ref="Player" />
            <Duration ref="Duration" />
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button  class="md-icon-button md-dense md-raised md-primary" v-on:click="createMatch"><md-icon>autorenew</md-icon></md-button>
        </md-card-actions>
      </md-card>

      <Countdown ref="Countdown" />
    </form>
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
  name: 'Match',
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
    $route: 'createMatch'
  },
  methods: {
    createMatch () {
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
