<template>
  <div id="themes">
    <h3>Thèmes</h3>
    <ul>
      <li v-for="theme in themes" :key="theme">
        {{theme}}
      </li>
    </ul>
  </div>
</template>

<script>
// Assets
import themes from '@/assets/json/themes.json'

export default {
  name: 'Themes',
  data () {
    return {
      themes: themes
    }
  }
}

</script>

<style scoped>

</style>
