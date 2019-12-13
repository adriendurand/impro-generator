<template>
  <div id="categories">
    <h3>Catégories</h3>
    <ul>
      <li v-for="category in categories" :key="category.title">
        {{category.title}}
        >> {{category.detail}}
      </li>
    </ul>
  </div>
</template>

<script>
// Assets
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
