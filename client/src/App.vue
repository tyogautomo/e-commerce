<template>
  <div id="app">
    <div id="nav">
      <Navbar :loginExist="loginExist"></Navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Main from "./views/Main";

export default {
  components: {
    Navbar,
    Home
  },
  data() {
    return {
       loginExist: localStorage.getItem("token")
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 0;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
