<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>

    <!-- 👇 This is where routed pages will appear -->
    <router-view />
  </div>
</template>

<script setup>
// nothing needed here for basic setup
</script>

<style>
nav {
  margin-bottom: 1rem;
}
nav a {
  margin: 0 0.5rem;
}
</style>
