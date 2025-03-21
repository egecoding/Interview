import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    UPDATE_USER(state, updatedUser) {
      const index = state.users.findIndex(user => user.id === updatedUser.id);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get("https://frontend-interview.touchinspiration.net/api/users");
        commit("SET_USERS", response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async updateUser({ commit }, user) {
      try {
        await axios.patch(`https://frontend-interview.touchinspiration.net/api/users/${user.id}`, user);
        commit("UPDATE_USER", user);
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  }
});
