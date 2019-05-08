<template>
  <main>
    <div class="container">
      <section class="pt-5">
        <b>
          <strong class="blue-text">Showing posts for {{ channel.channel }}</strong>
        </b>
        <div v-for="error in errors">
          {{ error }}
        </div>
        <div v-for="discussion in channel.discussions">
          <hr class="mb-5" />

          <!--Grid row-->
          <div class="row wow fadeIn">
            <!--Grid column-->
            <div class="col-lg-3 col-xl-3 mb-3">
              <!--  <p align="left">{{ discussion}}</p> -->
              <!--  <p align="left">{{ discussion.created_at }}</p> -->
              <p></p>
              <img v-bind:src="discussion.image" />
              <p></p>
            </div>
            <div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
              <h3 class="mb-3 font-weight-bold dark-grey-text">
                <strong>
                  <router-link v-bind:to="'/discussions/' + discussion.id + '/'">{{ discussion.title }}</router-link>
                </strong>
              </h3>
              {{ discussion.content }}
              <p></p>
              <p class="grey-text"></p>
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

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      channel: {
        channel: ""
      }
    };
  },
  created: function() {
    axios.get("/api/channels/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.channel = response.data;
    });
    // console.log(this.$route.params.id)
  },
  methods: {}
};
</script>
