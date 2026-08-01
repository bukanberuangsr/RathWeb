<script setup></script>

<template>
  <div class="bg-(--main-color) text-white overflow-hidden flex flex-row justify-around gap-12.5">
    <div class="flex items-center gap-2.5">
      <img src="/images/logo-1.png" class="w-7.5 h-7.5 rounded-full" />
      <span class="font-bold text-2xl">RathWeb</span>
    </div>
    <div class="flex justify-evenly">
      <router-link
        to="/"
        class="text-gray-200 text-center py-3.5 px-4 text-[17px] hover:bg-gray-200 hover:text-black [&.router-link-active]:bg-white [&.router-link-active]:text-black"
        >Home</router-link
      >
      <router-link
        to="/projects"
        class="text-gray-200 text-center py-3.5 px-4 text-[17px] hover:bg-gray-200 hover:text-black [&.router-link-active]:bg-white [&.router-link-active]:text-black"
        >Projects</router-link
      >
      <!-- <router-link
        to="/about"
        class="text-gray-200 text-center py-3.5 px-4 text-[17px] hover:bg-gray-200 hover:text-black [&.router-link-active]:bg-white [&.router-link-active]:text-black"
        >About</router-link
      > -->
    </div>
  </div>
</template>

<style scoped></style>
