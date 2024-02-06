import { createStore } from "vuex";

export default createStore({
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    sidebarType: "bg-white",
    isRTL: false,
    mcolor: "",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
    username: null,
    selectedType: 'Standalone',
    selectedProvider: 'Cloudstack',
  },
  mutations: {
    setSelectedType(state, type) {
      state.selectedType = type;
    },
    setSelectedProvider(state, provider) {
      state.selectedProvider = provider;
    },
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");

      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
    sidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    setUsername(state, username) {
      state.username = username;
    },
  },
  actions: {
    updateSelectedType({ commit }, type) {
      commit('setSelectedType', type);
    },
    updateSelectedProvider({ commit }, provider) {
      commit('setSelectedProvider', provider);
    },
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },

    setUsername({ commit }, username) {
      commit("setUsername", username);
    },
  },
  getters: {
    getUsername: (state) => state.username,
  },
});
