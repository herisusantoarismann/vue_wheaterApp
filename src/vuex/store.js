import { createStore } from "vuex";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";

const store = createStore({
  state: state,
  mutations: mutations,
  actions: actions,
});

export default store;
