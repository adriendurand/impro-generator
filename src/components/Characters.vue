<template>
  <div id="characters">
    <h3>Personnages</h3>
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
