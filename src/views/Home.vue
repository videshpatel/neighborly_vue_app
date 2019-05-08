<template style="background-image: url(/img/neighborhood.jpg)">
  <section class="card blue-gradient wow fadeIn" id="intro">
    <!-- Content -->
    <div class="card-body text-white text-center py-5 px-5 my-5">
      <h1 class="mb-4">
        Neighborly
      </h1>
      <p>
        <strong>Welcome to the Neighborly community</strong>
      </p>
      <p class="mb-4">
        <strong></strong>
      </p>
      <a target="" href="/login/" class="btn btn-outline-white btn-lg">
        Click Here to Login
      </a>
    </div>
    <!-- Content -->
  </section>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/discussions");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
