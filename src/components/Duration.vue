<template>
  <div>
    <div class="md-layout-item md-small-size-100">
      <span class="title">Duration:</span>
      <span> {{duration}}</span>
    </div>
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
