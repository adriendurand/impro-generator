<template>
  <div id="training">
    <md-card class="md-layout-item md-small-size-100">
      <md-card-content>
        <div class="md-layout md-gutter">
          <Category />
          <Theme />
          <Constraint />
          <Place />
          <Feeling />
          <Character />
        </div>
      </md-card-content>
    </md-card>
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
