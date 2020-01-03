<template>
  <div>
      <md-field>
        <label class="title">Thème:</label>
        <md-input class="md-input-override" v-model="theme" readonly/>
        <md-button class="md-icon-button md-primary" @click="refreshTheme"><md-icon>refresh</md-icon></md-button>
      </md-field>
  </div>
</template>

<script>
// Assets
import themes from '@/assets/json/themes.json'

export default {
  name: 'Theme',
  data () {
    return {
      themes: themes,
      theme: ''
    }
  },
  created () {
    this.refreshTheme()
  },
  watch: {
    $route: 'refreshTheme'
  },
  methods: {
    refreshTheme () {
      this.theme = themes[Math.floor(Math.random() * (themes.length))]
    }
  }
}
</script>

<style scoped>

</style>
