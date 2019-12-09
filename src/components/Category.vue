<template>
  <div>
    <div class="md-layout-item md-small-size-100">
      <span class="title">Catégorie:</span>
      <span> {{category.title}}</span>
      <md-button class="md-primary" :disabled="(category.detail == '')" @click="showDialog = (category.detail != '')"><md-icon>help</md-icon></md-button>
      <md-button class="md-primary" @click="refreshCategory"><md-icon>refresh</md-icon></md-button>
    </div>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Détails</md-dialog-title>
      {{category.detail}}
    </md-dialog>
  </div>
</template>

<script>
import categories from '@/assets/json/categories.json'

export default {
  name: 'Category',
  data () {
    return {
      categories: categories,
      category: '',
      showDialog: false
    }
  },
  created () {
    this.refreshCategory()
  },
  watch: {
    $route: 'refreshCategory'
  },
  methods: {
    refreshCategory () {
      this.category = categories[Math.floor(Math.random() * (categories.length))]
    }
  }
}
</script>

<style scoped>

</style>
