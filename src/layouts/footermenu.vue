<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar>
        <q-btn
          v-if="showback"
          flat round dense
          icon="arrow_back"
          @click="$router.go(-1)"
        />
        <q-toolbar-title>
          iAdam
          <span slot="subtitle"></span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-footer>
      <q-tabs>
        <q-route-tab
          slot="title"
          icon="home"
          to="/"
          replace
        />
        <q-route-tab
          slot="title"
          icon="info"
          to="/info"
          replace
        />
        <q-route-tab
          slot="title"
          icon="announcement"
          to="/activities"
          replace
        />
      </q-tabs>
    </q-layout-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-layout-drawer
      side="left"
      v-model="leftDrawer"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
      </q-scroll-area>
    </q-layout-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutFooter',
  watch: {
    '$route' (to, from) {
      console.log(Object.keys(to.params))
      if (Object.keys(to.params).length === 0) {
        this.showback = false
        console.log(this.showback)
      } else {
        this.showback = true
        console.log(this.showback)
      }
    }
  },
  data () {
    return {
      showback: false,
      leftDrawer: false
    }
  }
}
</script>

<style>
</style>
