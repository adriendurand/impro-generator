<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <router-link
        to="/match"
        tag="v-btn"
      >
        <v-btn
          flat
          value="match"
        >
          <span>{{button1}}</span>
        </v-btn>
      </router-link>

      <router-link
        to="/training"
        tag="v-btn"
      >
        <v-btn
          flat
          value="training"
        >
          <span>{{button2}}</span>
        </v-btn>
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
