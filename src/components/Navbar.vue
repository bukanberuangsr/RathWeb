<script setup></script>

<template>
  <div class="topnav">
    <div class="logo">
      <img src="/images/logo-1.png" />
      <span>RathWeb</span>
    </div>
    <div class="link-container">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style scoped>
.topnav {
  margin-bottom: 20px;
  background-color: var(--main-color);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 50px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-size: 1.5em;
    font-weight: 700;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
}

.link-container {
  display: flex;
  justify-content: space-evenly;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  justify-content: space-evenly;
}

.link-container a:hover {
  background-color: #ddd;
  color: black;
}

.link-container a.active {
  background-color: #04aa6d;
  color: white;
}
</style>
