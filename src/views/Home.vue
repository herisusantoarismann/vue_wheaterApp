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
.container {
  width: 100vw;
  height: 100vh;
  display: flex;

  background-position: center;
  background-size: cover;
  color: aliceblue;
}
.container.rain {
  background-image: url("../assets/bg-rain.jpg");
}
.container.cloudy {
  background-image: url("../assets/bg-cloudy.jpg");
}
.container.sunny {
  background-image: url("../assets/bg-sunny.jpg");
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
  cursor: pointer;
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

@media only screen and (max-width: 1024px) {
  .container .leftBox .wheater {
    padding: 10px;
  }
  .container .leftBox .wheater > h3 {
    font-size: 5rem;
  }
  .container .leftBox .wheater .wheater-time > h3 {
    font-size: 2rem;
    min-width: 180px;
  }
  .container .leftBox .wheater .wheater-time > p {
    font-size: 0.8rem;
  }
  .container .rightBox .wheater-search .location-list > span {
    margin: 5px;
  }
  .container .rightBox .wheater-detail > h1 {
    margin-bottom: 50px;
  }
  .container .rightBox .wheater-detail .wheater-detail-item {
    margin-bottom: 40px;
  }
}

@media only screen and (max-width: 768px) {
  .container .leftBox .wheater > h3 {
    font-size: 3rem;
  }
  .container .leftBox .wheater .wheater-time > h3 {
    font-size: 1.7rem;
  }
  .container .rightBox {
    padding: 25px;
  }
  .container .rightBox .wheater-search .location-list > span {
    font-size: 0.95rem;
  }
  .container .rightBox .wheater-detail > h1 {
    font-size: 1.4rem;
  }
  .container .rightBox .wheater-detail .wheater-detail-item > p {
    font-size: 0.9rem;
  }
  .container .rightBox .wheater-detail .wheater-detail-item > p:first-of-type {
    flex: 1;
  }
  .container .rightBox .wheater-detail .wheater-detail-item > p:last-of-type {
    flex: 1;
    text-align: end;
  }
}

@media only screen and (max-width: 425px) {
  .container {
    flex-wrap: wrap;
    height: 195vh;
    flex-direction: column;
  }
  .container .leftBox {
    padding: 30px;
  }
  .container .rightBox .wheater-search {
    min-height: 376px;
  }
  .container .rightBox .wheater-detail .wheater-detail-item {
    margin-bottom: 40px;
  }
}

@media only screen and (max-width: 411px) {
  .container {
    height: 200vh;
  }
}

@media only screen and (max-width: 375px) {
  .container {
    height: 195vh;
  }
  .container .leftBox {
    padding: 25px;
  }
  .container .leftBox .wheater > h3 {
    font-size: 2rem;
  }
  .container .leftBox .wheater .wheater-time > h3 {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 360px) {
  .container {
    height: 215vh;
  }
}

@media only screen and (max-width: 320px) {
  .container {
    height: 195vh;
  }
  .container .leftBox {
    padding: 15px;
  }
  .container .leftBox .wheater > h3 {
    font-size: 1.5rem;
  }
  .container .leftBox .wheater .wheater-time > h3 {
    font-size: 1.2rem;
  }
  .container .leftBox .wheater > img {
    width: 50px;
  }
}
</style>
