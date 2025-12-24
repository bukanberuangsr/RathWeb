<script setup>
import NavBar from './components/Navbar.vue'
</script>

<template>
  <NavBar/>
  <div class="content">
    <header>
      <h1><b>Welcome to RathWeb!</b></h1>
      <p>Aku Subtitle</p>
    </header>
    <div class="about">
      <h2>About Me</h2>
      <p></p>
    </div>
  </div>
</template>

<style scoped>
.content {
  margin-top: 40px;
  margin-left: 60px;
  margin-right: 60px;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
