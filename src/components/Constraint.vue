<template>
  <div>
      <md-field>
        <label class="title">Contrainte:</label>
        <md-input class="md-input-override" v-model="constraint.title" />
        <md-button class="md-icon-button md-primary" @click="refreshConstraint"><md-icon>refresh</md-icon></md-button>
        <md-button class="md-icon-button md-primary" v-show="(constraint.detail != '')" @click="showDialog = (constraint.detail != '')"><md-icon>help</md-icon></md-button>
      </md-field>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Détails</md-dialog-title>
      {{constraint.detail}}
    </md-dialog>
  </div>
</template>

<script>
// Assets
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
