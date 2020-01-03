<template>
  <div>
      <md-field>
        <label class="title">Catégorie:</label>
        <md-input class="md-input-override" v-model="category.title" readonly/>
        <md-button class="md-icon-button md-primary" @click="refreshCategory"><md-icon>refresh</md-icon></md-button>
        <md-button class="md-icon-button md-primary" v-show="(category.detail != '')" @click="showDialog = (category.detail != '')"><md-icon>help</md-icon></md-button>
      </md-field>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Détails</md-dialog-title>
      {{category.detail}}
    </md-dialog>
  </div>
</template>

<script>
// Assets
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
