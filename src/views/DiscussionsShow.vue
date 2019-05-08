<template>
  <!--Main layout-->

  <main>
    <div class="container">
      <section class="pt-5">
        <a href="discussions/new"><Strong>Create a new discussion</Strong></a>

        <hr class="mb-5" />

        <!--Grid row-->
        <div class="row wow fadeIn">
          <!--Grid column-->
          <div class="col-lg-3 col-xl-3 mb-3">
            <!--  <p align="left">{{ discussion}}</p> -->
            <p align="left">{{ discussion.created_at }}</p>
            <p align="left">{{ discussion.user.username }}</p>
            <p></p>
            <img v-bind:src="discussion.image" />
            <p></p>
          </div>
          <div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
            <h3 class="mb-3 font-weight-bold dark-grey-text">
              <strong>
                <router-link v-bind:to="'/discussions/' + discussion.id">{{ discussion.title }}</router-link>
              </strong>
            </h3>
            {{ discussion.content }}
            <p></p>
            <p class="grey-text">
              Located in:
              <router-link v-bind:to="'/channels/' + discussion.channel_id">{{ discussion.channel }}</router-link>
            </p>
            <form v-on:submit.prevent="makeReply()">
              Reply:
              <div class="md-form md-outline">
                <textarea v-model="newReplyReply" class="md-textarea form-control" rows="3"></textarea>
                <label for="form75"></label>
              </div>

              <input type="hidden" v-model="CurrentUser" />
              <input type="hidden" v-model="DiscussionId" />

              <input type="button" value="Make a new reply" />

              <!-- <button>Make a new reply</button> -->
            </form>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->

        <!--Pagination-->
      </section>
    </div>
  </main>
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
