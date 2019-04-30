<template>
  <div class="root">
    Channels edit page.
    <div v-for="error in errors">
      {{ error }}
    </div>

    <form v-on:submit.prevent="updateChannel()">
      <p>
        Channel:
        <input type="text" v-model="channel.channel" />
      </p>

      <input type="submit" value="Update channel" />
      <!-- <button>Make a new channel</button> -->
    </form>
    <button v-on:click="deleteChannel()">Delete channel</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      channel: {
        channel: ""
      },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/channels/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.channel = response.data;
    });
  },
  methods: {
    updateChannel: function() {
      console.log("making the new channel");
      // make a request to the api to the create action
      // response = HTTP.get("/api/channels")
      // channels = reponse.parse
      var params = {
        channel: this.channel.channel
      };
      console.log(params);

      axios
        .patch("/api/channels/" + this.$route.params.id, params)
        .then(response => {
          console.log("things are going well");
          console.log(response);
          this.$router.push("/channels/" + this.$route.params.id);
        })
        .catch(error => {
          console.log("things are going poorly");
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
    deleteChannel: function() {
      console.log("deleting the channel...");
      // make an HTTP request using axios to the destroy action of my API
      axios.delete("/api/channels/" + this.$route.params.id).then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>
