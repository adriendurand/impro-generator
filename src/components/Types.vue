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
// Assets
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

<style scoped>

</style>
