<template>
    <div class="container">
      <h2 class="text-center mb-4">Edit User</h2>
      <div class="card p-4 shadow">
        <form v-if="user" @submit.prevent="updateUser">
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input v-model="user.name" class="form-control" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input v-model="user.email" class="form-control" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Occupation</label>
            <input v-model="user.occupation" class="form-control" />
          </div>
          <button type="submit" class="btn btn-success">
            <i class="bi bi-check-circle"></i> Save Changes
          </button>
          <router-link to="/" class="btn btn-secondary ms-2">
            <i class="bi bi-arrow-left"></i> Cancel
          </router-link>
        </form>
        <p v-else class="text-danger">User not found!</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  
  export default {
    data() {
      return {
        user: null, // Holds the current user to edit
      };
    },
    computed: {
      ...mapState(["users"]),
    },
    watch: {
      users: {
        handler() {
          this.findUser();
        },
        immediate: true, // Run immediately when component loads
      },
      "$route.params.id": {
        handler() {
          this.findUser(); // Re-fetch user when route changes
        },
        immediate: true,
      },
    },
    async created() {
      console.log("Fetching users...");
      if (this.users.length === 0) {
        await this.fetchUsers(); // Fetch users if not already loaded
      }
      this.findUser(); // Find user after fetching
    },
    methods: {
      ...mapActions(["fetchUsers", "updateUser"]),
  
      findUser() {
        const userId = this.$route.params.id;
        console.log("Loading user with ID:", userId); // Debug log
  
        if (!userId) {
          console.error("User ID not found in route params!");
          return;
        }
  
        // Find the correct user by ID
        this.user = this.users.find((u) => String(u.id) === String(userId));
  
        if (!this.user) {
          console.error("User not found in Vuex store!");
        } else {
          console.log("User loaded:", this.user);
        }
      },
  
      async updateUser() {
        if (!this.user) return;
        await this.$store.dispatch("updateUser", this.user);
        this.$router.push("/");
      },
    },
  };
  </script>
  