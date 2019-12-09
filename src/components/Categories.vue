<template>
  <div id="categories">
    <h1>Catégories</h1>
    <ul>
      <li v-for="category in categories" :key="category">
        {{category.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import categories from '@/assets/json/categories.json'

export default {
  name: 'Categories',
  data () {
    return {
      categories: categories
    }
  }
}
</script>

<style scoped>

</style>
