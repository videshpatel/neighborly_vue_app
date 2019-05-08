<template>
  <!--Main layout-->

  <main>
    <div class="container">
      <section class="pt-5">
        <a href="discussions/new"><Strong>Create a new discussion</Strong></a>
        <div v-for="error in errors">
          {{ error }}
        </div>
        <div v-for="discussion in discussions">
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
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->

          <!--Pagination-->
        </div>
      </section>
    </div>
  </main>
</template>
<style>
img {
  width: 150px;
}
</style>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      titleFilter: "",
      discussions: []
    };
  },
  created: function() {
    axios.get("/api/discussions").then(response => {
      this.discussions = response.data;
    });
  },
  methods: {}
};
</script>
