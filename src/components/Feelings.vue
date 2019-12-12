<template>
  <div id="feelings">
    <h3>Emotions</h3>
    <ul>
      <li v-for="feeling in feelings" :key="feeling">
        {{feeling}}
      </li>
    </ul>
  </div>
</template>

<script>
// Assets
import feelings from '@/assets/json/feelings.json'

export default {
  name: 'Feelings',
  data () {
    return {
      feelings: feelings
    }
  }
}
</script>

<style scoped>

</style>
