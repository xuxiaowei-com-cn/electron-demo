<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/dll">Dll</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
const electron = require('electron')

export default {
  name: "Dll",
  created() {
    console.log('electron', electron)
  }
}
</script>

<style>
@import "../src/style/app.scss";

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
