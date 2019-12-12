<template>
  <div id="types">
    <h3>Types</h3>
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
