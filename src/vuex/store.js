import { createStore } from "vuex";
import axios from "axios";
import moment from "moment";

const store = createStore({
  state: {
    location: "",
    data: "",
    time: "",
    day: "",
  },
  mutations: {
    getWheater(state, payload) {
      state.data = payload;
    },
    getLocaltime(state, payload) {
      state.time = moment(payload).format("LT");
      state.day = `${moment().format("dddd")}, ${moment(payload).format("L")}`;
    },
  },
  actions: {
    async getAPI(context) {
      const wheater = await axios.get(
        "https://api.weatherapi.com/v1/current.json?key=e14a1c353c3a45269ac45827212408&q=Pangandaran West&aqi=yes"
      );
      context.commit("getWheater", wheater.data);
      context.commit("getLocaltime", wheater.data.location.localtime);
    },
  },
});

export default store;
