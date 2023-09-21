<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/widget">Widget Weather</router-link>
    <router-link to="/recipes">Culinary Recipes</router-link>
  </nav>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
//
</script>
<style>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  background-color: rgb(238, 238, 238);
}

nav a.router-link-exact-active {
  color: rgb(171, 7, 7);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 8px;
  margin: 8px;
  border-left: 1px solid var(--color-border);
  background-color: rgb(170, 170, 170);
  color: black;
  font-size: 16px;
  font-weight: bolder;
  border-radius: 8px;
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}
</style>
