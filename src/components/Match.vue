<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">
      <span>{{button1}}</span>
    </router-link>
    THEMES
    <ul>
      <li v-for="theme in themes" :key="theme">
        {{theme}}
      </li>
    </ul>

    CATEGORIES
    <ul>
      <li v-for="category in categories" :key="category">
        {{category}}
      </li>
    </ul>
  </div>
</template>

<script>
import categories from '../assets/json/categories.json'
import themes from '../assets/json/themes.json'
export default {
  name: 'Match',
  data () {
    return {
      msg: 'Bienvenue sur votre générateur de match d\'improvisation',
      button1: 'Accueil',
      categories: categories,
      themes: themes
    }
  },
  created() {
    //this.fetchData();
  },
  watch: {
    //$route: "fetchData"
  },
  methods: {
    fetchData() {
      this.categories = [
        {name: 'Categ1'},
        {name: 'Categ2'}
      ];
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
