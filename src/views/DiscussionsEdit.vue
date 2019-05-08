<template>
  <div class="root">
    Discussions edit page.
    <div v-for="error in errors">
      {{ error }}
    </div>

    <form v-on:submit.prevent="updateDiscussion()">
      <p>
        Title:
        <input type="text" v-model="discussion.title" />
      </p>
      <p>
        Content:
        <input type="text" v-model="discussion.content" />
      </p>
      <p>
        Image:
        <input type="text" v-model="discussion.image" />
      </p>
      <p>
        Channel Name:
        <input type="text" v-model="discussion.channel_id" />
      </p>

      <input type="submit" value="Update discussion" />
      <!-- <button>Make a new discussion</button> -->
    </form>
    <button v-on:click="deleteDiscussion()">Delete discussion</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      discussion: {
        title: "",
        content: "",
        image: "",
        channel: ""
      },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/discussions/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.discussion = response.data;
    });
  },
  methods: {
    updateDiscussion: function() {
      console.log("making the new discussion");
      // make a request to the api to the create action
      // response = HTTP.get("/api/discussions")
      // discussions = reponse.parse
      var params = {
        title: this.discussion.title,
        content: this.discussion.content,
        image: this.discussion.image,
        channel: this.discussion.channel
      };
      console.log(params);

      axios
        .patch("/api/discussions/" + this.$route.params.id, params)
        .then(response => {
          console.log("things are going well");
          console.log(response);
          this.$router.push("/discussions/" + this.$route.params.id);
        })
        .catch(error => {
          console.log("things are going poorly");
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
    deleteDiscussion: function() {
      console.log("deleting the discussion...");
      // make an HTTP request using axios to the destroy action of my API
      axios.delete("/api/discussions/" + this.$route.params.id).then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>
