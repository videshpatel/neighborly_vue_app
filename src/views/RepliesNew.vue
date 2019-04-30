<template>
  <div class="root">
    New replies page
    <div v-for="error in errors">
      {{ error }}
    </div>

    <form v-on:submit.prevent="makeReply()">
      <p>
        Reply:
        <input type="text" v-model="newReplyReply" />
      </p>

      <input type="submit" value="Make a new reply" />
      <!-- <button>Make a new reply</button> -->
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newReplyReply: "",

      errors: []
    };
  },
  created: function() {},
  methods: {
    makeReply: function() {
      console.log("making the new reply");
      // make a request to the api to the create action
      // response = HTTP.get("/api/replies")
      // replies = reponse.parse
      var params = {
        title: this.newReplyReply
      };
      axios
        .post("/api/replies", params)
        .then(response => {
          console.log("things are going well");
          console.log(response);
          this.$router.push("/");
        })
        .catch(error => {
          console.log("things are going poorly");
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
