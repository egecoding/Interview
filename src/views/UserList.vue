<template>
    <div class="container">
      <h2 class="text-center mb-4">User List</h2>
      <button @click="fetchUsers" class="btn btn-primary mb-3">Refresh Users</button>
      <div class="row">
        <div v-for="user in users" :key="user.id" class="col-md-4">
          <div class="card p-3 shadow">
            <h5>{{ user.name }}</h5>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>Occupation:</strong> {{ user.occupation }}</p>
            <router-link :to="'/edit/' + user.id" class="btn btn-warning">
              <i class="bi bi-pencil"></i> Edit
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  
  export default {
    computed: {
      ...mapState(["users"]),
    },
    methods: {
      fetchUsers() {
        this.$store.dispatch("fetchUsers");
      },
    },
    created() {
      this.fetchUsers();
    },
  };
  </script>
  