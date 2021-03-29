import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api: "https://www.dnd5eapi.co/api/",
    searchQuery: "",
    results: [],
    detail: { category: "", cardData: undefined }
  },
  mutations: {
    Slugify: state => {
      state.searchQuery = state.searchQuery
        .toLowerCase()
        .replace(/ /g, "+")
        .replace(/[^\w+]+/g, "");
    },
    UpdateSearch: (state, message) => {
      state.searchQuery = message;
    },
    UpdateResults: (state, result) => {
      state.results.push(result);
    },
    ClearResults: state => {
      state.results = [];
      state.detail = { category: "", cardData: undefined };
    },
    updateDetail: (state, detail) => {
      state.detail = detail;
    }
  },
  actions: {
    Slug: context => {
      context.commit("Slugify");
    }
  },
  modules: {}
});
