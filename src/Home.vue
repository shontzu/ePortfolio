<template>
  <div class="home">
    <h1>HOME</h1>
    <header />
    <summary />
    <experiences />
    <webdev />
    <multimedia />
  </div>
</template>

<script>
import Header from '../src/components/Header.vue'
import Summary from '../src/components/Summary.vue'
import Experiences from '../src/components/Experiences.vue'
import Webdev from '../src/components/Webdev.vue'
import Multimedia from '../src/components/Multimedia.vue'

export default {
  name: "home",
  components: {
    Header,
    Summary,
    Experiences,
    Webdev,
    Multimedia,
  },
};
</script>