<template>
  <div id="referentials">
    <md-card id="match" class="md-layout-item md-small-size-100">
      <md-card-content>
        <div class="md-layout md-gutter">
          <Durations />
          <Players />
          <Types />
          <Constraints />
          <Feelings />
          <Characters />
          <Categories />
          <Themes />
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
// Components
import Categories from '@/components/Categories'
import Themes from '@/components/Themes'
import Types from '@/components/Types'
import Players from '@/components/Players'
import Durations from '@/components/Durations'
import Characters from '@/components/Characters'
import Constraints from '@/components/Constraints'
import Feelings from '@/components/Feelings'

export default {
  name: 'Referentials',
  components: {
    'Categories': Categories,
    'Themes': Themes,
    'Types': Types,
    'Players': Players,
    'Durations': Durations,
    'Characters': Characters,
    'Constraints': Constraints,
    'Feelings': Feelings
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
