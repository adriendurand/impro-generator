<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <router-link to="/match">
        <span>{{button1}}</span>
      </router-link>

      <router-link to="/training">
        <span>{{button2}}</span>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Bienvenue sur votre générateur de match et d\'entrainement d\'improvisation',
      button1: 'Match',
      button2: 'Training'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
