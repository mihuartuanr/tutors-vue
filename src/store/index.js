import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const $setApplications = 'SETAPPLICATIONS';

export default new Vuex.Store({
  state: {
    applications: null,
  },
  mutations: {
    [$setApplications]: (state, list) => state.applications = list,
  },
  actions: {
    requestApplications({ commit, state }) {
      axios.get('/')
        .then(({ data: { list } }) => {
          commit($setApplications, list);
        })
        .catch(() => {
          console.log(arguments);
        })
    }
  }
})
