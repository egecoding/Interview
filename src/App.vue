<template>
  <div id="app" class="container mt-4">
    <nav class="navbar navbar-dark bg-primary mb-4">
      <div class="container">
        <a class="navbar-brand" href="#">User Management</a>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background-color: #f8f9fa;
}
</style>

