<template>
  <div id="types">
    <h1>Types</h1>
    <ul>
      <li v-for="type in types" :key="type">
        {{type}}
      </li>
    </ul>
  </div>
</template>

<script>
import types from '@/assets/json/types.json'

export default {
  name: 'Types',
  data () {
    return {
      types: types
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
