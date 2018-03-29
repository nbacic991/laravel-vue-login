<template>
  <div id="chat-add-widget">
    <form @submit.prevent="handleAddChat">
      <div class="form-group">
        <input type="text" placeholder="Enter Your text" class="form-control" v-model="message">
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      chatStore: state => state.chatStore
    })
  },
  data() {
    return {
      message: null
    }
  },
  methods: {
    handleAddChat() {
      if(this.message !== null) {
        let postData = {
          'receiver_id': this.chatStore.currentChatUser.id,
          'chat': this.message
        }

        this.$store.dispatch('addNewChatToConversation', postData)
          .then(response => {
            this.message = null
          })
      }
    }
  }
}
</script>

<style lang="scss">
  #chat-add-widget {
    position: fixed;
    bottom: 0;
    width: 80%;
    max-width: 80%;
    input {
      width: 100%;
      max-width: 80%;
    }
  }
</style>
