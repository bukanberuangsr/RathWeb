<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
const greetings = ['Hello!', 'Halo!', 'Hola!', '!مرحبًا', 'こんにちは!']
const greetIndex = ref(0)
const greeting = computed(() => greetings[greetIndex.value])

let intervalId
onMounted(() => {
  intervalId = window.setInterval(() => {
    greetIndex.value = (greetIndex.value + 1) % greetings.length
  }, 2000)
})

onUnmounted(() => {
  window.clearInterval(intervalId)
})
</script>

<template>
  <div class="content">
    <section class="image">
      <img src="/images/pfp.jpg" alt="" />
    </section>
    <section class="about">
      <h1 id="greeting">
        <Transition name="greeting" mode="out-in">
          <span :key="greeting"> {{ greeting }} </span>
        </Transition>
        <br />
        My name is Akhtar
      </h1>
      <p>
        I am an Information Technology student at Universitas Brawijaya who is passionate about Web
        Development, Mobile Development, and UI/UX Design. <br />
        You can contact me using this button below:
      </p>
      <div class="links">
        <a href="https://instagram.com/bukanberuangsr">Instagram</a>
        <a href="https://github.com/bukanberuangsr">Github</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.content {
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 60px;
  gap: 50px;
}

.image img {
  height: 350px;
  width: auto;
  border: 5px solid var(--main-color);
  transition: border 0.5s ease-in-out;
}

.image img:hover {
  border: 5px solid var(--tertiary-color);
}

.about {
  max-width: 520px;
  h1 {
    margin-bottom: 10px;
  }

  h1,
  span {
    font-weight: 700;
  }

  span {
    font-size: 3em;
  }

  p {
    font-weight: 400;
    text-align: justify;
    margin-bottom: 10px;
  }
}

.greeting-enter-active,
.greeting-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.greeting-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.greeting-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

#greeting span {
  display: inline-block;
}

.links {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.links a {
  padding: 10px;
  background-color: var(--accent-dark-blue);
  color: var(--white);
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
}

.links a:hover {
  background-color: var(--accent-light-blue);
  color: var(--accent-darker-blue);
}

@media (max-width: 786px) {
  .content {
    flex-direction: column;
    padding: 0 24px;
    gap: 24px;
    text-align: center;
  }
  .about p {
    text-align: justify;
  }
}
</style>
