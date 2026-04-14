<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <nav id="nav">
      <p class="logo-place">Vue.js Remote Server App</p>
      <ul class="nav-links">
        <li class="links">
          <router-link to="/">Home</router-link>

        </li>
        <li class="links">
          <router-link to="/AddUser">Add User</router-link>

        </li>
        <li class="links">
          <router-link to="/AllUsers">All Users</router-link>
        </li>
      </ul>

    </nav>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  display: flex;
  margin-bottom: 24px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right:12px;
}
#nav a.router-link-active {
  color: #ab26ab;
}
.nav-links {
  padding-right: 20px;
  list-style: none;
  display: flex;
  margin:21px 0 0 0;
}
.links-hover {
  text-decoration: underline;
}
.logo-place {
  font-size: 20px;
  color: purple;
  font-weight: bold;
  margin:16px 0 0 16px;
}
</style>
