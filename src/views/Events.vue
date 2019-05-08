<template>
  <vue-event-calendar :events="events">
    <template scope="props">
      <a style="color: #FFFFFF; text-decoration: none" href="events/new">
        <span style="color: #FFFFFF; text- decoration: none">
          <font color="#FFFFFF">
            <b><h4>Add Event</h4></b>
          </font>
        </span>
      </a>
      <div v-for="event in (events, props.showEvents)" class="event-item">
        {{ event.title }}
      </div>
    </template>
    <a href="/events/new">Add an event</a>
  </vue-event-calendar>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      events: []
    };
  },
  created: function() {
    axios.get("/api/events").then(response => {
      this.events = response.data;
    });
  },
  methods: {}
};
</script>
