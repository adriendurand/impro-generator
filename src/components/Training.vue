<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">
      <span>{{button1}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Training',
  data () {
    return {
      msg: 'Bienvenue sur votre générateur d\'entrainement d\'improvisation',
      button1: 'Accueil'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
