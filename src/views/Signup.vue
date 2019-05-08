<template>
  <div class="signup">
    <div class="container">
      <section class="section-preview">
        <!-- Extended default form grid -->
        <div class="container">
          <div class="row valign-wrapper">
            <div class="card text-center" style="width: 65rem;">
              <div class="card-body">
                <form v-on:submit.prevent="submit()">
                  <ul>
                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                  </ul>
                  <!-- Grid row -->
                  <div class="form-row">
                    <!-- Default input -->
                    <div class="form-group col-md-6">
                      <label for="inputUsername" class="active">Username</label>
                      <input type="text" class="form-control" v-model="username" placeholder="Username" />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4" class="active">Email</label>
                      <input type="email" class="form-control" v-model="email" placeholder="Email" />
                    </div>
                    <!-- Default input -->
                    <div class="form-group col-md-6">
                      <label for="inputPassword4" class="active">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        v-model="password"
                        placeholder="Password"
                        autocomplete="off"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4" class="active">Confirm Password</label>
                      <input
                        type="password"
                        class="form-control"
                        v-model="passwordConfirmation"
                        placeholder="Password"
                        autocomplete="off"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputUsername" class="active">Full Name</label>
                      <input type="text" class="form-control" v-model="name" placeholder="Username" />
                    </div>
                  </div>
                  <!-- Grid row -->

                  <!-- Default input -->
                  <div class="form-group">
                    <label for="inputAddress" class="active">Address</label>
                    <input type="text" class="form-control" v-model="street_1" placeholder="1234 Main St" />
                  </div>
                  <!-- Default input -->
                  <div class="form-group">
                    <label for="inputAddress2" class="active">Address 2</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="street_2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div>
                  <!-- Grid row -->
                  <div class="form-row">
                    <!-- Default input -->
                    <div class="form-group col-md-6">
                      <label for="inputCity" class="active">City</label>
                      <input type="text" class="form-control" v-model="city" placeholder="New York City" />
                    </div>
                    <!-- Default input -->
                    <div class="form-group col-md-6">
                      <label for="inputZip" class="active">Zip</label>
                      <input type="text" class="form-control" v-model="postal_code" placeholder="11206" />
                    </div>
                  </div>
                  <!-- Grid row -->
                  <button type="submit" class="btn btn-primary btn-md waves-effect waves-light">Signup</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- Extended default form grid -->
      </section>
      <!--       <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Username:</label>
          <input type="text" class="form-control" v-model="username" />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password" />
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation" />
        </div>
        <div class="form-group">
          <label>Full Name:</label>
          <input type="text" class="form-control" v-model="name" />
        </div>
        <div class="form-group">
          <label>Street Address Line 1:</label>
          <input type="text" class="form-control" v-model="street_1" />
        </div>
        <div class="form-group">
          <label>Street Address Line 2 (opitional):</label>
          <input type="text" class="form-control" v-model="street_2" />
        </div>
        <div class="form-group">
          <label>City:</label>
          <input type="text" class="form-control" v-model="city" />
        </div>
        <div class="form-group">
          <label>State:</label>
          <input type="text" class="form-control" v-model="state" />
        </div>
        <div class="form-group">
          <label>Zip Code:</label>
          <input type="text" class="form-control" v-model="postal_code" />
        </div>
        <div class="form-group">
          <label>Country:</label>
          <input type="text" class="form-control" v-model="country" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      name: "",
      street_1: "",
      street_2: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        name: this.name,
        street_1: this.street_1,
        street_2: this.street_2,
        city: this.city,
        state: this.state,
        postal_code: this.postal_code,
        country: this.country
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
