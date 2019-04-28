<template>
  <div class="root">
    Discussions show page.
    <p>{{ discussion.title }}</p>
    <p>{{ discussion.content }}</p>
    <router-link v-bind:to="'/discussions/' + discussion.id + '/edit'">Edit the discussion</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      discussion: {
        title: "",
        content: ""
      }
    };
  },
  created: function() {
    axios.get("/api/discussions/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.discussion = response.data;
    });
    // console.log(this.$route.params.id)
  },
  methods: {}
};
</script>
