<script setup>
</script>

<template>
  <div class="content">
    <section class="image">
      <img src="/images/pfp.jpg" alt="" />
    </section>
    <section class="about">
      <h1>Hello! My name is Akhtar</h1>
      <p>
        I am an Information Technology student at Universitas Brawijaya who is passionate about Web
        Development, Mobile Development, and UI/UX Design.
      </p>
    </section>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  padding: 0 500px;
  gap: 50px;
}
.image img {
  height: auto;
  width: 200px;
}
.about {
  h1 {
    font-weight: 700;
  }
  p {
    font-weight: 400;
    text-align: justify;
  }
}

@media (max-width: 786px) {
  .container {
    margin: 0;
    padding: auto 10px;
    gap: 0;
  }
}
</style>
