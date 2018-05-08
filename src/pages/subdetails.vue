<template>
  <q-page >
    <q-card>
      <q-card-title>
        Subject Progress
        <span slot="subtitle">By Chapter & Mastery</span>
      </q-card-title>
      <q-card-media class="q-px-md">
        <div>
          <sunburst />
        </div>
      </q-card-media>
    </q-card>
  </q-page>
</template>

<script>
import Sunburst from '../components/sunburst'
export default {
  name: 'PageSubdetails',
  components: {
    'sunburst': Sunburst
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
