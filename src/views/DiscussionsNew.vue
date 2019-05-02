<template>
  <div class="root">
    <h4>New discussions page</h4>

    <p></p>
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
        <textarea v-model="newDiscussionContent" placeholder=""></textarea>
      </p>
      <p>
        <input type="hidden" v-model="newDiscussionUserID" />
      </p>
      <p>
        Channel:
        <select v-model="selected">
          <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
        <!-- <span>Selected: {{ selected }}</span> -->
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
      selected: "",
      options: [
        { text: "General", value: "4" },
        { text: "For Sale", value: "5" },
        { text: "Wanted", value: "7" },
        { text: "Crime & Safety", value: "8" },
        { text: "Lost & Found", value: "9" },
        { text: "Events", value: "10" },
        { text: "Alerts!", value: "11" }
      ],
      newDiscussionTitle: "",
      newDiscussionContent: "",
      newDiscussionUserID: "",
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
        channel_id: this.selected
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
