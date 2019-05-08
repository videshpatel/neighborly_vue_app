<template>
  <div class="root">
    <p></p>
    <div v-for="error in errors">
      {{ error }}
    </div>
    <div class="container">
      <div class="row valign-wrapper">
        <div class="card text-center" style="width: 45rem;">
          <div class="card-body">
            <form v-on:submit.prevent="makeDiscussion()">
              <p>
                Title:
                <input class="form-control" type="text" v-model="newDiscussionTitle" placeholder="Enter title" />
              </p>

              Message:
              <div class="md-form md-outline">
                <textarea v-model="newDiscussionContent" class="md-textarea form-control" rows="3"></textarea>
                <label for="form75"></label>
              </div>

              <p>
                Title:
                <input class="form-control" type="text" v-model="newDiscussionImage" placeholder="Enter image URL" />
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
      selected: "",
      options: [
        { text: "General", value: "13" },
        { text: "For Sale", value: "14" },
        { text: "Wanted", value: "15" },
        { text: "Crime & Safety", value: "16" },
        { text: "Lost & Found", value: "17" },
        { text: "Events", value: "18" },
        { text: "Alerts!", value: "19" }
      ],
      newDiscussionTitle: "",
      newDiscussionContent: "",
      newDiscussionUserID: "",
      newDiscussionImage: "",
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
        image: this.newDiscussionImage,
        user_id: this.newDiscussionUserID,
        channel_id: this.selected
      };
      axios
        .post("/api/discussions", params)
        .then(response => {
          console.log("things are going well");
          console.log(response);
          this.$router.push("/discussions");
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
