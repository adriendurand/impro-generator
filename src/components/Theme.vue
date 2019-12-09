<template>
  <div>
    <div class="md-layout-item md-small-size-100">
      <span class="title">Ayant pour thème:</span>
      <span>{{theme}}</span>
      <md-button class="md-primary" @click="refreshTheme"><md-icon>refresh</md-icon></md-button>
    </div>
  </div>
</template>

<script>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
