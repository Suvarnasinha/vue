<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/users">Users</router-link></li>
          <li><router-link to="/albums">Albums</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 10px 0;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

nav ul li {
  display: inline-block;
  margin-right: 10px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
}

nav ul li a:hover {
  background-color: #555;
}
</style>
