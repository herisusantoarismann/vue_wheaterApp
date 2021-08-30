<template>
  <div class="leftBox">
    <h1>Wheater App</h1>
    <div class="wheater">
      <h3>{{ Math.round(data.current.temp_c) }}&#8451;</h3>
      <div class="wheater-time">
        <h3>{{ data.location.name }}</h3>
        <p>{{ time }} - {{ day }}</p>
      </div>
      <img v-bind:src="data.current.condition.icon" alt="wheater-icon" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["data", "time", "day"]),
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
