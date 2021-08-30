<template>
  <div v-if="data === ''"><Loading /></div>
  <div class="container" :class="bg" v-else>
    <LeftBox />
    <RightBox />
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";
import LeftBox from "../components/LeftBox.vue";
import RightBox from "../components/RightBox.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Loading,
    LeftBox,
    RightBox,
  },
  data() {
    return {
      interval: null,
      inputLocation: "",
      bg: "",
    };
  },
  beforeUnmount() {
    // prevent memory leak
    clearInterval(this.interval);
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      this.getAPI();
      let condition = this.data.current.condition.text.toLowerCase();
      if (condition.indexOf("cloud") > -1 || condition.indexOf("mist") > -1) {
        this.bg = "cloudy";
      } else if (condition.indexOf("rain") > -1) {
        this.bg = "rain";
      } else {
        this.bg = "sunny";
      }
    }, 1000);
  },
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    ...mapActions(["getAPI"]),
  },
};
</script>

<style>
@import "./Home.css";
</style>
