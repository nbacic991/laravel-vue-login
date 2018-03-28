<template>
  <div class="wrapper" id="chat-user-list-wrapper">
    <ul class="list-group">
      <li 
      class="list-group-item"
      v-for="user in chatStore.userList" :key="user.name"
      v-if="user.name !== userStore.authUser.name"
      :class="{ active: userActiveStyle(user) }"
      @click="changeChatUser(user)">
        {{user.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      chatStore: state => state.chatStore,
      userStore: state => state.userStore
    })
  },
  methods: {
    changeChatUser(user) {
      this.$store.dispatch('setCurrentChatUser', user)
    },
    userActiveStyle(user) {
      if(this.chatStore.currentChatUser === null) {
        return false
      }
      if(this.chatStore.currentChatUser.id === user.id) {
        return true
      }
      return false
    }
  }
}
</script>
