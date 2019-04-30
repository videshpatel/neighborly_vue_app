<template>
  <div class="home">
    <h1>All Replies</h1>
    <div v-for="reply in replies">
      <!--       <p>{{ reply.channel.channel }}</p> -->

      <p>
        <router-link v-bind:to="'/replies/' + reply.id">{{ reply.reply }}</router-link>
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
      replies: []
    };
  },
  created: function() {
    axios.get("/api/replies").then(response => {
      this.replies = response.data;
    });
  },
  methods: {}
};
</script>
