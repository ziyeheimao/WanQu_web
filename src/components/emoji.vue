<template>
  <VueEmoji ref="emoji" @input="onInput" />
</template>
<script>
import VueEmoji from 'emoji-vue'
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      onInput() {
          //event.data contains the value of the textarea
      },
      // clearTextarea(){
      //   this.$refs.emoji.clear()
      // },  
    },
    components: {
      VueEmoji
    }
  };
</script>