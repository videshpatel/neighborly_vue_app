<template>
  <div class="root">
    <p>Showing posts for {{ reply.reply }}</p>

    <div v-for="discussion in reply.discussions">
      {{ discussion.title }}
    </div>
    <p></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      reply: {
        reply: ""
      }
    };
  },
  created: function() {
    axios.get("/api/replies/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.reply = response.data;
    });
    // console.log(this.$route.params.id)
  },
  methods: {}
};
</script>
