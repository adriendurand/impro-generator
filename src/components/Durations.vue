<template>
  <div id="types">
    <h1>Durations</h1>
    <ul>
      <li v-for="duration in durations" :key="duration">
        {{duration}}
      </li>
    </ul>
  </div>
</template>

<script>
import durations from '@/assets/json/durations.json'

export default {
  name: 'Durations',
  data () {
    return {
      durations: durations
    }
  }
}
</script>

<style scoped>

</style>
