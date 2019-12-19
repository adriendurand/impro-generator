<template>
  <div id="types">
    <h3>Durées:</h3>
    <ul>
      <li v-for="duration in durations" :key="duration">
        {{duration}}
      </li>
    </ul>
  </div>
</template>

<script>
// Assets
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
