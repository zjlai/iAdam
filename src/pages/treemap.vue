<template>
  <q-page >
    <q-card>
      <q-card-title>
        Subject Progress
        <span slot="subtitle">By Chapter & Mastery</span>
      </q-card-title>
      <q-card-media class="q-px-md">
        <div>
          <treemap />
        </div>
      </q-card-media>
    </q-card>
  </q-page>
</template>

<script>
import treemap from '../components/treemap'
export default {
  name: 'PageTreemap',
  components: {
    'treemap': treemap
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
