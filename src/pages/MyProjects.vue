<script setup>
import { ref } from 'vue';
const projects = ref([
{
  name: 'Project: Dream',
  image: '/images/projects/projectDream.webp',
  languages: ['GDScript'],
  projectUrl: 'https://rathmakes.itch.io/project-dream'
},
{
  name: 'YASP - Yet Another Start Page',
  image: '/images/projects/YASP.webp',
  languages: ['HTML', 'CSS', 'JS'],
  projectUrl: 'https://github.com/bukanberuangsr/YASP'
},
{
  name: 'Ecoin',
  image: '/images/projects/ecoin.webp',
  languages: ['PHP', 'Vue', 'Tailwind', 'CSS'],
  projectUrl: 'https://github.com/TrashAlpha/Ecoin'
}
])

</script>

<template>
  <div class="min-h-[calc(100vh-80px)] flex flex-row items-center justify-center mx-auto gap-12.5">
    <section class="text-justify">
      <h1 class="font-bold text-7xl mb-5">Projects</h1>
       <p class="text-md my-4">This is a list of my projects</p>
      <button class="cursor-pointer w-full flex p-2.5 bg-(--main-color) text-white transition-[color,background-color,box-shadow,transform] duration-200 ease-in-out hover:bg-(--tertiary-color) hover:shadow-[0_0_20px_var(--main-color)] hover:-translate-y-0.5">
        Open Projects
      </button>
    </section>
    <section class="h-120 w-130 overflow-hidden">
      <div class="px-5 flex flex-col animate-[scroll-vertical_15s_linear_infinite] hover:[animation-play-state:paused]">
        <div
          v-for="project in projects" :key="project.name"
          class="bg-linear-to-r from-violet-950 to-purple-900 my-3 p-3 h-120 flex flex-col items-center justify-center border-l-4 border-violet-500 hover:border-l-violet-300 transition-all hover:translate-x-2">
          <!-- <p class="text-md font-normal">gambar</p> -->
          <img v-if="project.image" :src="project.image" :alt="project.name" loading="lazy" class="w-full h-full object-cover"/>
        </div>
        <div
          aria-hidden="true"
          v-for="project in projects" :key="project.name"
          class="bg-linear-to-r from-violet-950 to-purple-900 my-3 p-3 h-120 flex flex-col items-center justify-center border-l-4 border-violet-500 hover:border-l-violet-300 transition-all hover:translate-x-2">
          <!-- <p class="text-md font-normal">gambar</p> -->
          <img v-if="project.image" :src="project.image" :alt="project.name" loading="lazy" class="w-full h-full object-cover"/>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@keyframes scroll-vertical {
  from { transform: translateY(0); }
  to   { transform: translateY(-50%); }
}
</style>
