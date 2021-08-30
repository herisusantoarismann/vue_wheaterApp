import axios from "axios";

const actions = {
  async getAPI({ commit, state }) {
    const wheater = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=e14a1c353c3a45269ac45827212408&q=${state.location}&aqi=yes`
    );
    commit("getWheater", wheater.data);
    commit("getLocaltime", wheater.data.location.localtime);
  },
};

export default actions;
