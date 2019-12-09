<template>
  <div>
    <div class="md-layout-item md-small-size-100">
      <span class="title">Type:</span>
      <span> {{type}}</span>
      <md-button class="md-primary" @click="refreshType"><md-icon>refresh</md-icon></md-button>
    </div>
  </div>
</template>

<script>
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
