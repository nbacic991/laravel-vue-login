<template>
  <div class="wrapper" id="home-wrapper">
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
import { loginUrl } from '../config.js'
import { client_id, client_secret } from '../env.js'

export default {
  data() {
    return {
      login: {
        email: 'nbacic@ymail.com',
        password: 'password'
      }
    }
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
      this.$http.post(loginUrl, postData)
      .then(response => {
        console.log(response)
        // this.$http.get('http://dev.laravel.loc/api/user', { headers: header })
        //   .then(response => {
        //     console.log(response)
        // })
      })
    }
  }
}
</script>
