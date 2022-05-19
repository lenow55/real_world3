<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "HomeView",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: "animal welfale",
          title: "Cat Adoom Day",
          location: "Meow Town",
          date: "January 28, 2002",
          time: "12:00",
          petsAllowed: true,
          organizer: "Cat Laydee",
        },
        {
          id: 4587456,
          category: "animal sdf",
          title: "Cat Adoom Dasdfy",
          location: "Meow Town",
          date: "January 278, 2d002",
          time: "19:00",
          petsAllowed: true,
          organizer: "Cat sdfds",
        },
        {
          id: 3789458,
          category: "aneme sdf",
          title: "Cat Eva Dasdfy",
          location: "Neco Town",
          date: "January 278, 2d002",
          time: "19:00",
          petsAllowed: true,
          organizer: "Neko sdfds",
        },
      ],
    };
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
