<template>
  <div id="constraints">
    <h3>Contraintes</h3>
    <ul>
      <li v-for="constraint in constraints" :key="constraint.title">
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
