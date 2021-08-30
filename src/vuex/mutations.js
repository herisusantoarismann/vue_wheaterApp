import moment from "moment";

const mutations = {
  changeLocation(state, payload) {
    state.location = payload;
    const idxLoc = state.locationList.indexOf(payload);
    if (idxLoc >= 0) {
      state.locationList.splice(idxLoc, 1);
      state.locationList.unshift(payload);
    } else {
      if (state.locationList.length < 5) {
        state.locationList.unshift(payload);
      } else {
        state.locationList.unshift(payload);
        state.locationList.pop();
      }
    }
  },
  getWheater(state, payload) {
    state.data = payload;
  },
  getLocaltime(state, payload) {
    state.time = moment(payload).format("LT");
    state.day = `${moment().format("dddd")}, ${moment(payload).format("L")}`;
  },
};

export default mutations;
