<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">LaraVue</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li 
          v-if="userStore.authUser !== null && userStore.authUser.access_token"
          class="nav-item active">
            <router-link :to="{name: 'dashboard'}" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'chat'}" class="nav-link">Chat</router-link>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> -->
        </ul>
        <ul class="navbar-nav ml-auto">
          <li 
          class="nav-item"
          v-if="userStore.authUser !== null && userStore.authUser.access_token">
            <a @click="handleLogout()" class="nav-link curs">Logout</a>
          </li>
          <li
          v-else
          class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('clearAuthUser')
      window.localStorage.removeItem('authUser')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.curs {
  &:hover {
    cursor: pointer;
  }
}
</style>
