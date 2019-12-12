<template>
  <div>
    <div class="md-layout-item md-small-size-100">
      <span class="title">Emotion:</span>
      <span> {{feeling}}</span>
      <md-button class="md-primary" @click="refreshFeeling"><md-icon>refresh</md-icon></md-button>
    </div>
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
