<template>
  <div>
      <md-field>
        <label class="title">Personnage:</label>
        <md-input class="md-input-override" v-model="character" />
        <md-button class="md-icon-button md-primary" @click="refreshCharacter"><md-icon>refresh</md-icon></md-button>
      </md-field>
  </div>
</template>

<script>
// Assets
import characters from '@/assets/json/characters.json'

export default {
  name: 'Character',
  data () {
    return {
      characters: characters,
      character: ''
    }
  },
  created () {
    this.refreshCharacter()
  },
  watch: {
    $route: 'refreshCharacter'
  },
  methods: {
    refreshCharacter () {
      this.character = characters[Math.floor(Math.random() * (characters.length))]
    }
  }
}
</script>

<style scoped>

</style>
