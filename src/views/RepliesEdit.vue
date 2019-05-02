<template>
  <div class="root">
    Replys edit page.
    <div v-for="error in errors">
      {{ error }}
    </div>

    <form v-on:submit.prevent="updateReply()">
      <p>
        Reply:
        <input type="text" v-model="reply.reply" />
      </p>

      <input type="submit" value="Update reply" />
      <!-- <button>Make a new reply</button> -->
    </form>
    <button v-on:click="deleteReply()">Delete reply</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      reply: {
        reply: ""
      },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/replies/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.reply = response.data;
    });
  },
  methods: {
    updateReply: function() {
      console.log("making the new reply");
      // make a request to the api to the create action
      // response = HTTP.get("/api/replies")
      // replies = reponse.parse
      var params = {
        reply: this.reply.reply
      };
      console.log(params);

      axios
        .patch("/api/replies/" + this.$route.params.id, params)
        .then(response => {
          console.log("things are going well");
          console.log(response);
          this.$router.push("/replies/" + this.$route.params.id);
        })
        .catch(error => {
          console.log("things are going poorly");
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
    deleteReply: function() {
      console.log("deleting the reply...");
      // make an HTTP request using axios to the destroy action of my API
      axios.delete("/api/replies/" + this.$route.params.id).then(response => {
        this.$router.push("/replies");
      });
    }
  }
};
</script>
