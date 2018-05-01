<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar>
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
          to="/your/route"
          replace
        />
        <q-route-tab
          slot="title"
          icon="info"
          to="/some/other/route"
          replace
        />
        <q-route-tab
          slot="title"
          icon="announcement"
          to="/some/other/route"
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
  // name: 'LayoutName',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
</style>
