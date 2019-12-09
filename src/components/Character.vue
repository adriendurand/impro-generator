<template>
  <div>
    <div class="md-layout-item md-small-size-100">
      <span class="title">Personnage:</span>
      <span> {{character}}</span>
      <md-button class="md-primary" @click="refreshCharacter"><md-icon>refresh</md-icon></md-button>
    </div>
  </div>
</template>

<script>
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
