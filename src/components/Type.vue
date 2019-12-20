<template>
  <div>
      <md-field>
        <label class="title">Type:</label>
        <md-input class="md-input-override" v-model="type" />
        <md-button class="md-icon-button md-primary" @click="refreshType"><md-icon>refresh</md-icon></md-button>
      </md-field>
  </div>
</template>

<script>
// Assets
import types from '@/assets/json/types.json'

export default {
  name: 'Type',
  data () {
    return {
      types: types,
      type: ''
    }
  },
  created () {
    this.refreshType()
  },
  watch: {
    $route: 'refreshType'
  },
  methods: {
    refreshType () {
      this.type = types[Math.floor(Math.random() * (types.length))]
    }
  }
}
</script>

<style scoped>

</style>
