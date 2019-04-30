<template>
  <div class="root">
    New channels page
    <div v-for="error in errors">
      {{ error }}
    </div>

    <form v-on:submit.prevent="makeChannel()">
      <p>
        Channel:
        <input type="text" v-model="newChannelChannel" />
      </p>

      <input type="submit" value="Make a new channel" />
      <!-- <button>Make a new channel</button> -->
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newChannelChannel: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    makeChannel: function() {
      console.log("making the new channel");
      // make a request to the api to the create action
      // response = HTTP.get("/api/channels")
      // channels = reponse.parse
      var params = {
        channel: this.newChannelChannel
      };
      axios
        .post("/api/channels", params)
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
