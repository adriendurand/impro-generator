<template>
  <div>
    <div class="md-layout-item md-small-size-100">
      <span class="title">Contrainte:</span>
      <span> {{constraint.title}}</span>
      <md-button class="md-primary" :disabled="(constraint.detail == '')" @click="showDialog = (constraint.detail != '')"><md-icon>help</md-icon></md-button>
      <md-button class="md-primary" @click="refreshConstraint"><md-icon>refresh</md-icon></md-button>
    </div>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Détails</md-dialog-title>
      {{constraint.detail}}
    </md-dialog>
  </div>
</template>

<script>
import constraints from '@/assets/json/constraints.json'

export default {
  name: 'Constraint',
  data () {
    return {
      constraints: constraints,
      constraint: '',
      showDialog: false
    }
  },
  created () {
    this.refreshConstraint()
  },
  watch: {
    $route: 'refreshConstraint'
  },
  methods: {
    refreshConstraint () {
      this.constraint = constraints[Math.floor(Math.random() * (constraints.length))]
    }
  }
}
</script>

<style scoped>

</style>
