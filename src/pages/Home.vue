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
  <div
    class="min-h-[calc(100vh-80px)] flex flex-row items-center justify-center mx-auto px-15 gap-12.5 max-[786px]:flex-col max-[786px]:px-6 max-[786px]:gap-6 max-[786px]:text-center"
  >
    <section class="image">
      <img
        src="/images/pfp.jpg"
        alt="Akhtar"
        class="h-87.5 w-auto border-5 border-(--main-color) shadow-[0_0_16px_var(--main-color)] hover:border-(--tertiary-color) hover:shadow-[0_0_16px_var(--tertiary-color)]"
      />
    </section>
    <section class="max-w-130">
      <h1 id="greeting" class="font-bold text-3xl mb-2.5">
        <Transition name="greeting" mode="out-in">
          <span :key="greeting" class="inline-block text-[3em]"> {{ greeting }} </span>
        </Transition>
        <br />
      </h1>
      <h2 class="font-bold text-3xl my-5.5">My name is Akhtar</h2>
      <p class="font-normal text-base text-justify mb-5">
        I am an Information Technology student at Universitas Brawijaya who is passionate about Web
        Development, Mobile Development, and UI/UX Design.
      </p>
      <div class="my-2.5 flex flex-row gap-2.5 w-full">
        <a
          href="https://linkedin.com/in/akhtar-hafiz-p-303949289"
          class="flex-1 p-2.5 bg-(--main-color) text-white text-center transition-[color,background-color,box-shadow,transform] duration-200 ease-in-out hover:bg-(--tertiary-color) hover:shadow-[0_0_20px_var(--main-color)] hover:-translate-y-0.5"
          >LinkedIn</a
        >
        <a
          href="https://github.com/bukanberuangsr"
          class="flex-1 p-2.5 bg-(--main-color) text-white text-center transition-[color,background-color,box-shadow,transform] duration-200 ease-in-out hover:bg-(--tertiary-color) hover:shadow-[0_0_20px_var(--main-color)] hover:-translate-y-0.5"
          >Github</a
        >
        <a
          href="https://rathmakes.itch.io/"
          class="flex-1 p-2.5 bg-(--main-color) text-white text-center transition-[color,background-color,box-shadow,transform] duration-200 ease-in-out hover:bg-(--tertiary-color) hover:shadow-[0_0_20px_var(--main-color)] hover:-translate-y-0.5"
          >Itch.io</a
        >
      </div>
    </section>
  </div>
</template>

<style scoped>
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
</style>
