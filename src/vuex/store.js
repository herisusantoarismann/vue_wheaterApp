import { createStore } from "vuex";
import axios from "axios";
import moment from "moment";

const store = createStore({
  state: {
    location: "Pangandaran West",
    data: "",
    time: "",
    day: "",
  },
  mutations: {
    changeLocation(state, payload) {
      state.location = payload;
    },
    getWheater(state, payload) {
      state.data = payload;
    },
    getLocaltime(state, payload) {
      state.time = moment(payload).format("LT");
      state.day = `${moment().format("dddd")}, ${moment(payload).format("L")}`;
    },
  },
  actions: {
    async getAPI({ commit, state }) {
      const wheater = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=e14a1c353c3a45269ac45827212408&q=${state.location}&aqi=yes`
      );
      commit("getWheater", wheater.data);
      commit("getLocaltime", wheater.data.location.localtime);
    },
  },
});

export default store;
