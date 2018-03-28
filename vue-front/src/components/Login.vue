<template>
  <div class="wrapper" id="login-wrapper">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <form @submit.prevent="handleLoginFormSubmit">
          <v-text-field
            v-model="login.email"
            label="Name"
            type="text"></v-text-field>
          <v-text-field
            v-model="login.password"
            label="Password"
            type="password"></v-text-field>
          <v-btn type="submit">Login</v-btn>
        </form>
      </v-flex>
      
    </v-layout>
  </div>
</template>

<script>
import { loginUrl, getHeader, userUrl } from '../config.js'
import { client_id, client_secret } from '../env.js'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      login: {
        email: 'nbacic@ymail.com',
        password: 'password'
      }
    }
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  methods: {
    handleLoginFormSubmit() {
      const postData = {
        grant_type: 'password',
        client_id: client_id,
        client_secret: client_secret,
        username: this.login.email,
        password: this.login.password,
        scope: ''
      }
      const authUser = {}
      this.$http.post(loginUrl, postData)
      .then(response => {
        if(response.status === 200) {
          // console.log('Oauth token', response)
          
          authUser.access_token = response.data.access_token
          authUser.refresh_token = response.data.refresh_token
          window.localStorage.setItem('authUser', JSON.stringify(authUser))
          
          this.$http.get(userUrl, {headers: getHeader()})
          .then(response => {
            // console.log('user object', response)
            
            authUser.email = response.body.email
            authUser.name = response.body.name
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
            this.$store.dispatch('setUserObject', authUser)
            this.$router.push({name: 'dashboard'})
          })
        }
      })
    }
  }
}
</script>
