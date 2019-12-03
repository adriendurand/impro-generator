<template>
  <div id="categories">
    <b>CATEGORIES</b>
    <ul>
      <li v-for="category in categories" :key="category">
        {{category}}
      </li>
    </ul>
  </div>
</template>

<script>
// TODO Passer en paramètre ?
import categories from '../assets/json/categories.json'

export default {
  name: 'Categories',
  data () {
    return {
      categories: categories
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
