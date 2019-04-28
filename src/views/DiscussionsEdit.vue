<template>
  <div class="root">
    Discussions edit page.
    <div v-for="error in errors">
      {{ error }}
    </div>

    <form v-on:submit.prevent="updateRiscussion()">
      <p>
        Title:
        <input type="text" v-model="discussion.title" />
      </p>
      <p>
        Chef:
        <input type="text" v-model="discussion.content" />
      </p>

      <input type="submit" value="Update discussion" />
      <!-- <button>Make a new discussion</button> -->
    </form>
    <button v-on:click="deleteRiscussion()">Delete discussion</button>
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
    updateRiscussion: function() {
      console.log("making the new discussion");
      // make a request to the api to the create action
      // response = HTTP.get("/api/discussions")
      // discussions = reponse.parse
      var params = {
        title: this.discussion.title,
        content: this.discussion.content
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
    deleteRiscussion: function() {
      console.log("deleting the discussion...");
      // make an HTTP request using axios to the destroy action of my API
      axios.delete("/api/discussions/" + this.$route.params.id).then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>
