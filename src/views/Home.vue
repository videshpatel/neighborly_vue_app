<template>
  <div class="home">
    <h1>All Discussions</h1>
    <div v-for="discussion in discussions">
      <p>{{ discussion.title }}</p>
      <p>{{ discussion.content }}</p>
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
