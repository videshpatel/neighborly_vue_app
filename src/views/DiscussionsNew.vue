<template>
  <div class="root">
    New discussions page
    <div v-for="error in errors">
      {{ error }}
    </div>

    <form v-on:submit.prevent="makeDiscussion()">
      <p>
        Title:
        <input type="text" v-model="newDiscussionTitle" />
      </p>
      <p>
        Content:
        <input type="text" v-model="newDiscussionContent" />
      </p>
      <p>
        User ID:
        <input type="text" v-model="newDiscussionUserID" />
      </p>
      <p>
        Channel ID:
        <input type="text" v-model="newDiscussionChannelID" />
      </p>

      <input type="submit" value="Make a new discussion" />
      <!-- <button>Make a new discussion</button> -->
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newDiscussionTitle: "",
      newDiscussionContent: "",
      newDiscussionUserID: "1",
      newDiscussionChannelID: "4",
      errors: []
    };
  },
  created: function() {},
  methods: {
    makeDiscussion: function() {
      console.log("making the new discussion");
      // make a request to the api to the create action
      // response = HTTP.get("/api/discussions")
      // discussions = reponse.parse
      var params = {
        title: this.newDiscussionTitle,
        content: this.newDiscussionContent,
        user_id: this.newDiscussionUserID,
        channel_id: this.newDiscussionChannelID
      };
      axios
        .post("/api/discussions", params)
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
