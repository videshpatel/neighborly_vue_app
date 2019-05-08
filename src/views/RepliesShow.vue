<template>
  <div class="root">
    <p>Showing posts for {{ reply.reply }}</p>

    <div v-for="discussion in reply.discussions">
      <div class="container">
        <div class="row valign-wrapper">
          <div class="card text-center" style="width: 35rem;">
            <div class="card-body">
              {{ discussion.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <p></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      reply: {
        reply: ""
      }
    };
  },
  created: function() {
    axios.get("/api/replies/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.reply = response.data;
    });
    // console.log(this.$route.params.id)
  },
  methods: {}
};
</script>
