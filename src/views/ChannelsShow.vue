<template>
  <div class="root">
    <p>Showing posts for {{ channel.channel }}</p>

    <div v-for="discussion in channel.discussions">
      <router-link v-bind:to="'/discussions/' + discussion.id + '/'">{{ discussion.title }}</router-link>
      <!--  {{ discussion.title }} -->
    </div>
    <p></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      channel: {
        channel: ""
      }
    };
  },
  created: function() {
    axios.get("/api/channels/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.channel = response.data;
    });
    // console.log(this.$route.params.id)
  },
  methods: {}
};
</script>
