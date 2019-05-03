<template>
  <div class="home">
    <h4>All Discussions</h4>
    <input type="text" v-model="titleFilter" list="titles" />
    <datalist id="titles">
      <option v-for="discussion in discussions">{{ discussion.title }}</option>
    </datalist>
    <div v-for="discussion in discussions">
      <router-link v-bind:to="'/discussions/' + discussion.id">{{ discussion.title }}</router-link>
      Located in:
      <router-link v-bind:to="'/channels/' + discussion.channel_id">{{ discussion.channel }}</router-link>
      {{ discussions.user }}
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      titleFilter: "",
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
