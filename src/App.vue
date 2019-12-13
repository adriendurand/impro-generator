<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">My Title</span>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs md-sync-route class="md-primary">
            <md-tab id="tab-home" md-label="Match" to="/" exact></md-tab>
            <md-tab id="tab-training" md-label="Entrainement" to="/training"></md-tab>
            <md-tab id="tab-referentials" md-label="Référentiels" to="/referentials"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <!-- <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar> -->

        <md-list>
          <md-list-item>
            <md-icon>account_circle</md-icon>
            <span class="md-list-item-text">Connexion</span>
          </md-list-item>

          <md-list-item>
            <md-icon to="/about">info</md-icon>
            <span class="md-list-item-text">A propos</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
   /* .md-app {
    max-height: 700px;
    border: 1px solid rgba(#000, .12);
  } */
  .md-content {
    max-height: 700px;
    overflow: auto;
  }
</style>

<script>
export default {
  name: 'App',
  data: () => ({
    menuVisible: false
  })
}
</script>
