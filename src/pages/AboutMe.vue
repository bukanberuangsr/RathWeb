<script setup></script>

<template>
  <div class="content">
    <header>
      <h1>About Me</h1>
    </header>
    <section class="desc">
      <p>
        Hello there! My name is Akhtar Hafiz Puliwarna, but you can call me Akhtar. I am an
        Information Technology student at Universitas Brawijaya who is passionate about Web
        Development, Mobile Development, and UI/UX Design.
      </p>
    </section>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 60px;
  gap: 24px;
}

header {
  text-align: center;
  h1 {
    font-size: 5em;
    font-weight: 700;
  }
}

.desc {
  max-width: 720px;
  p {
    text-align: justify;
    font-weight: 500;
  }
}
</style>
