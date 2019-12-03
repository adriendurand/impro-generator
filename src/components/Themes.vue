<template>
  <div>
    <b>THEMES</b>
    <ul>
      <li v-for="theme in themes" :key="theme">
        {{theme}}
      </li>
    </ul>
  </div>
</template>

<script>
// TODO Passer en paramètre ?
import themes from '../assets/json/themes.json'

export default {
  name: 'Themes',
  data () {
    return {
      themes: themes
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
