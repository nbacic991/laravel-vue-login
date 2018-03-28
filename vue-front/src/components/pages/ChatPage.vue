<template>
  <div class="wrapper" id="chat-wrapper">
    <section class="heading">
      <h1 class="page-title">Chat</h1>
    </section>
    <section class="content">
      <div class="col-md-2" id="user-list-col">
        <app-chat></app-chat>
      </div>
      <div class="col-md-10" id="chat-content-wrapper">
        Chat content
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ChatUserList from '../chat/ChatUserList'

export default {
  components: {
    appChat: ChatUserList
  },
  computed: {
    ...mapState({
      chatStore: state => state.chatStore
    })
  },
  created() {
    this.$store.dispatch('setUserList')
  }
}
</script>
