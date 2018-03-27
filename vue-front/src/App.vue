<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    const postData = {
      grant_type: 'password',
      client_id: '2',
      client_secret: 'AuiT7yP5HvfKYA6RRuC28KQx6r47KK8bvK3IkTIR',
      username: 'nbacic@ymail.com',
      password: 'password',
      scope: ''
    }
    this.$http.post('http://dev.laravel.loc/oauth/token', postData)
      .then(response => {
        console.log(response)
        const header = {
          'Accept' : 'application/json',
          'Authorization' : 'Bearer ' + response.body.access_token
        }
        this.$http.get('http://dev.laravel.loc/api/user', { headers: header })
          .then(response => {
            console.log(response)
        })
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
