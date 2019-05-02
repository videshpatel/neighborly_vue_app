<template>
  <div class="home">
    Discussions show page.

    <p>{{ discussion.title }}</p>
    <p>{{ discussion.content }}</p>

    <div v-for="reply in discussion.replies">
      {{ reply.reply }}
      <!-- array called discussions.replies -->
      <!--      <router-link v-bind:to="'/discussions/' + discussion.id + '/'">{{ reply.reply }}</router-link> -->
    </div>

    <form v-on:submit.prevent="makeReply()">
      <p>
        Reply:
        <input type="text" v-model="newReplyReply" />
        <input type="hidden" v-model="CurrentUser" />
        <input type="hidden" v-model="DiscussionId" />
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
      discussion: {
        title: "",
        content: ""
      },
      reply: {
        newReplyReply: "",
        CurrentUser: "",
        DiscussionId: ""
      }
    };
  },
  created: function() {
    this.$route;

    axios.get("/api/discussions/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.discussion = response.data;
    });
    // console.log(this.$route.params.id)
  },
  methods: {
    makeReply: function() {
      console.log("making the new reply");
      // make a request to the api to the create action
      // response = HTTP.get("/api/replies")
      // replies = reponse.parse
      var params = {
        reply: this.newReplyReply,
        user_id: this.CurrentUser,
        discussion_id: this.$route.params.id
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
