<template>
  <div>
    <my-header/>
    <div id="app">
        <router-view/>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

export default {
  name: 'App',
  components: {
    'my-header': Header,
    'my-footer': Footer
  }
}
</script>

<style>
 span.title {
   font-weight: bold;
   font-size: 1.2em;
 }
</style>
