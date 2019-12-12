<template>
  <div id="constraints">
    <h1>Contraintes</h1>
    <ul>
      <li v-for="constraint in constraints" :key="constraint">
        {{constraint.title}}
        >> {{constraint.detail}}
      </li>
    </ul>
  </div>
</template>

<script>
// Assets
import constraints from '@/assets/json/constraints.json'

export default {
  name: 'Constraints',
  data () {
    return {
      constraints: constraints
    }
  }
}
</script>

<style scoped>

</style>
