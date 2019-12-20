<template>
  <div>
      <md-field>
        <label class="title">Emotion:</label>
        <md-input class="md-input-override" v-model="feeling" />
        <md-button class="md-icon-button md-primary" @click="refreshFeeling"><md-icon>refresh</md-icon></md-button>
      </md-field>
    </div>
</template>

<script>
// Assets
import feelings from '@/assets/json/feelings.json'

export default {
  name: 'Feeling',
  data () {
    return {
      feelings: feelings,
      feeling: ''
    }
  },
  created () {
    this.refreshFeeling()
  },
  watch: {
    $route: 'refreshFeeling'
  },
  methods: {
    refreshFeeling () {
      this.feeling = feelings[Math.floor(Math.random() * (feelings.length))]
    }
  }
}
</script>

<style scoped>

</style>
