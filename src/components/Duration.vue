<template>
  <div>
      <md-field>
        <label class="title">Durée:</label>
        <md-input class="md-input-override" v-model="duration" />
        <md-button class="md-icon-button md-primary" @click="refreshDuration"><md-icon>refresh</md-icon></md-button>
      </md-field>
  </div>
</template>

<script>
// Assets
import durations from '@/assets/json/durations.json'

export default {
  name: 'Duration',
  data () {
    return {
      durations: durations,
      duration: ''
    }
  },
  created () {
    this.refreshDuration()
  },
  watch: {
    $route: 'refreshDuration'
  },
  methods: {
    refreshDuration () {
      this.duration = durations[Math.floor(Math.random() * (durations.length))]
    }
  }
}
</script>

<style scoped>

</style>
