<template>
  <q-page class="flex">
    <q-card>
      <q-card-media overlay-position="bottom">
        <img src="assets/android.jpg" />
        <q-card-title slot="overlay">
          Announcements
        </q-card-title>
      </q-card-media>
      <q-card-separator />
      <q-card-main class="q-pa-none">
        <q-list link multiline>
          <q-list-header inset>Response required</q-list-header>
          <q-item to="/info/details/0">
            <q-item-side inverted letter="C" icon="" color="tertiary" />
            <q-item-main>
              <q-item-tile label>Consent form for excursion</q-item-tile>
              <q-item-tile sublabel>Deadline: 2 more days</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item to="/info/details/1">
            <q-item-side inverted letter="i" color="info" />
            <q-item-main>
              <q-item-tile label>Hand Foot Mouth Safety</q-item-tile>
              <q-item-tile sublabel>Deadline: 2 more days</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item to="/info/details/2">
            <q-item-side inverted letter="$" color="warning" />
            <q-item-main>
              <q-item-tile label>Science Centre trip</q-item-tile>
              <q-item-tile sublabel>Deadline: 3 more days</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item-separator />
          <q-list-header inset>General Information</q-list-header>
          <q-item to="/info/details/3">
            <q-item-side inverted letter="i" color="secondary" />
            <q-item-main>
              <q-item-tile label>School Closed for Cleaning</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item to="/info/details/3">
            <q-item-side inverted letter="i" color="secondary" />
            <q-item-main>
              <q-item-tile label>No parking outside school</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item to="/info/details/3">
            <q-item-side inverted letter="i" color="secondary" />
            <q-item-main>
              <q-item-tile label>Healthy Lifestyle</q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageInfo',
  date () {
    return {}
  }
}
</script>

<style>
</style>
