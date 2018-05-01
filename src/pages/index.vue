<template>
  <q-page class="flex">
    <q-card>
      <q-card-media overlay-position="bottom">
        <img src="assets/home_bg.jpg" />
        <q-card-title slot="overlay">
          Schedule
        </q-card-title>
      </q-card-media>
      <q-card-separator />
      <q-card-main>
        <q-timeline color="secondary" class="q-px-md">
          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
          >
            <div>
              Lorem ipsum dolor sit amet.
            </div>
          </q-timeline-entry>
          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
          >
            <div>
              Lorem ipsum dolor sit amet.
            </div>
          </q-timeline-entry>
          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
          >
            <div>
              Lorem ipsum dolor sit amet.
            </div>
          </q-timeline-entry>
          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
          >
            <div>
              Lorem ipsum dolor sit amet.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
    }
  }
}
</script>
