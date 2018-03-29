<template>
  <div class="wrapper" id="chat-wrapper">
    <section class="heading">
      <h1 class="page-title">Chat</h1>
    </section>
    <section class="content">
      <div class="col-md-2" id="user-list-col">
        <app-user-list></app-user-list>
      </div>
      <div class="col-md-10" id="chat-content-wrapper">
        <div class="chat-block">
          <app-conversation></app-conversation>
        </div>
        <div class="add-chat-block">
          <app-add-chat></app-add-chat>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ChatUserList from '../chat/ChatUserList'
import ChatWidget from '../chat/ChatWidget'
import ChatAddWidget from '../chat/ChatAddWidget'

export default {
  components: {
    appUserList: ChatUserList,
    appConversation: ChatWidget,
    appAddChat: ChatAddWidget
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

<style lang="scss">
  @import '../../assets/css/variables.scss';
  #user-list-col {
    border-right: 1px solid $border-color;
  }
  .add-chat-block {
    position: relative;
  }
</style>