<template>
  <div class="root">
    <h1>.</h1>

    <div class="container">
      <div class="row valign-wrapper">
        <div class="card text-center" style="width: 35rem;">
          <div class="card-body">
            <form v-on:submit.prevent="makeEvent()">
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
              <p>
                Date:
                <input type="text" vale="YYYY/MM/DD" v-model="newEventDate" placeholder="YYYY/MM/DD" />
              </p>

              Event Discription:

              <div class="md-form md-outline">
                <textarea v-model="newEventTitle" class="md-textarea form-control" rows="3"></textarea>
                <label for="form75"></label>
              </div>

              <p>
                <input type="hidden" v-model="newEventDesc" />
              </p>

              <input type="submit" value="Make a new event" />
              <!-- <button>Make a new event</button> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newEventDate: "",
      newEventTitle: "",
      newEventDesc: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    makeEvent: function() {
      console.log("making the new event");
      // make a request to the api to the create action
      // response = HTTP.get("/api/events")
      // events = reponse.parse
      var params = {
        date: this.newEventDate,
        title: this.newEventTitle,
        desc: this.newEventDesc
      };
      axios
        .post("/api/events", params)
        .then(response => {
          console.log("things are going well");
          console.log(response);
          this.$router.push("/events");
        })
        .catch(error => {
          console.log("things are going poorly");
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
