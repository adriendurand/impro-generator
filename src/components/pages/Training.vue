<template>
  <div id="training">
    <h1>Entrainement</h1>
      <Category />
      <Theme />
      <Constraint />
      <Place />
      <Feeling />
      <Character />
  </div>
</template>

<script>
// Components
import Category from '@/components/Category'
import Theme from '@/components/Theme'
import Constraint from '@/components/Constraint'
import Place from '@/components/Place'
import Feeling from '@/components/Feeling'
import Character from '@/components/Character'

export default {
  name: 'Training',
  components: {
    'Category': Category,
    'Theme': Theme,
    'Constraint': Constraint,
    'Place': Place,
    'Feeling': Feeling,
    'Character': Character
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
