<template>
  <div class="home">
    <h1>All Channels</h1>
    <div v-for="channel in channels">
      <!--       <p>{{ channel.channel.channel }}</p> -->

      <p>
        <router-link v-bind:to="'/channels/' + channel.id">{{ channel.channel }}</router-link>
      </p>

      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      channels: []
    };
  },
  created: function() {
    axios.get("/api/channels").then(response => {
      this.channels = response.data;
    });
  },
  methods: {}
};
</script>
