<template>
  <div id="characters">
    <h1>Personnages</h1>
    <ul>
      <li v-for="character in characters" :key="character">
        {{character}}
      </li>
    </ul>
  </div>
</template>

<script>
// Assets
import characters from '@/assets/json/characters.json'

export default {
  name: 'Characters',
  data () {
    return {
      characters: characters
    }
  }
}
</script>

<style scoped>

</style>
