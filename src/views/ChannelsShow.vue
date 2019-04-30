<template>
  <div class="root">
    Channels show page.
    <p>{{ channel.channel }}</p>
    <router-link v-bind:to="'/channels/' + channel.id + '/edit'">Edit the channel</router-link>
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
