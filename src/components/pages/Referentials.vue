<template>
  <div id="referencials">
    <h1>Référentiels</h1>
    <Durations />
    <Players />
    <Types />
    <Categories />
    <Themes />
  </div>
</template>

<script>
// Components
import Categories from '@/components/Categories'
import Themes from '@/components/Themes'
import Types from '@/components/Types'
import Players from '@/components/Players'
import Durations from '@/components/Durations'

export default {
  name: 'Referentials',
  components: {
    'Categories': Categories,
    'Themes': Themes,
    'Types': Types,
    'Players': Players,
    'Durations': Durations
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
