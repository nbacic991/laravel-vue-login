<template>
  <div>
    <app-menu></app-menu>
    <v-container id="app">
      <router-view/>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TopMenu from './components/TopMenu'

export default {
  created() {
    const userObj = JSON.parse(window.localStorage.getItem('authUser'))
    this.$store.dispatch('setUserObject', userObj)
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  components: {
    appMenu: TopMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
