<template>
  <div class="home">
    <h1>All Discussions</h1>
    <div v-for="discussion in discussions">
      <!--       <p>{{ discussion.channel.channel }}</p> -->

      <p>
        <router-link v-bind:to="'/discussions/' + discussion.id">{{ discussion.title }}</router-link>
      </p>
      <p>{{ discussion.channel.channel }}</p>

      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      discussions: []
    };
  },
  created: function() {
    axios.get("/api/discussions").then(response => {
      this.discussions = response.data;
    });
  },
  methods: {}
};
</script>
