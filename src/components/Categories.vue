<template>
  <div id="categories">
    <h1>Catégories</h1>
    <ul>
      <li v-for="category in categories" :key="category">
        {{category.title}}
        >> {{category.detail}}
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
