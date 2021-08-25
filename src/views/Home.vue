<template>
  <div v-if="data === ''"><p>KOSONG</p></div>
  <div class="container" v-else>
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
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      interval: null,
      inputLocation: "",
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
    }, 1000);
  },
  computed: {
    ...mapState(["data", "time", "day", "locationList"]),
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
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-image: url("../assets/bg-rain.jpg");
  background-position: center;
  background-size: cover;
  color: aliceblue;
}
.container .leftBox {
  width: 100%;
  height: 100%;
  padding: 30px 70px;
  flex: 2;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.container .leftBox h1 {
  font-size: 1.3rem;
  font-weight: 700;
}
.container .leftBox .wheater {
  width: 60%;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container .leftBox .wheater .wheater-time > h3 {
  font-size: 2.5rem;
}
.container .leftBox .wheater > h3 {
  font-size: 7rem;
}
.container .rightBox {
  width: 100%;
  height: 100%;
  padding: 80px 35px;
  flex: 1;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(20px);
}
.container .rightBox .wheater-search {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.container .rightBox .wheater-search > input {
  width: 80%;
  padding: 10px;
  border: none;
  background: transparent;
  color: #fff;
  outline: none;
  border-bottom: 1px solid white;
  margin-bottom: 20px;
}
.container .rightBox .wheater-search .location-list {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 70%;
  scrollbar-width: thin;
}
.container .rightBox .wheater-search .location-list > span {
  margin: 10px;
  padding: 10px;
  width: fit-content;
  cursor: pointer;
}
.container .rightBox .wheater-search > input::placeholder {
  color: #fff;
}
.container .rightBox .wheater-search > input:focus::placeholder {
  color: transparent;
}
.container .rightBox .wheater-detail {
  flex: 1;
}
.container .rightBox .wheater-detail > h1 {
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 100px;
}
.container .rightBox .wheater-detail .wheater-detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}
</style>
