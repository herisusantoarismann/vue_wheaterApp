<template>
  <div class="rightBox">
    <div class="wheater-search">
      <input
        type="text"
        placeholder="Another Location"
        v-on:keyup.enter="changeLocation(inputLocation)"
        v-model="inputLocation"
      />
      <div class="location-list">
        <span
          v-for="(item, index) in locationList"
          :key="index"
          @click="changeLocation(item)"
          >{{ item }}</span
        >
      </div>
    </div>
    <div class="wheater-detail">
      <h1>Wheater Detail</h1>
      <div class="wheater-detail-item">
        <p>Cloudy</p>
        <p>{{ data.current.cloud }}</p>
      </div>
      <div class="wheater-detail-item">
        <p>Humidity</p>
        <p>{{ data.current.humidity }}</p>
      </div>
      <div class="wheater-detail-item">
        <p>Wind</p>
        <p>{{ data.current.wind_mph }}m/ph</p>
      </div>
      <div class="wheater-detail-item">
        <p>Air Quality</p>
        <p>{{ changeAQ(data.current.air_quality["us-epa-index"]) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      inputLocation: "",
      bg: "",
    };
  },
  computed: {
    ...mapState(["data", "locationList"]),
  },
  methods: {
    ...mapMutations(["changeLocation"]),
    ...mapActions(["getAPI"]),
    changeAQ(idx) {
      const AQ_Desc = [
        "Good",
        "Moderate",
        "Unhealthy (if sensitive)",
        "Unhealthy",
        "Very unhealthy",
        "Hazardous",
      ];

      return AQ_Desc[idx - 1];
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
