<script setup></script>

<template>
  <div class="topnav">
    <!-- <div class="logo">
      <img src="/src/assets/logo.svg" alt="Logo" width="100px">
    </div> -->
    <div class="link-container">
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/projects">Projects</a>
    </div>
  </div>
</template>

<style scoped>
.topnav {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: var(--main-color);
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
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
