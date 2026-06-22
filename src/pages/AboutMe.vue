<script setup></script>

<template>
  <div>
    <header class="py-10 bg-(--secondary-color) text-center">
      <h1 class="font-bold text-7xl">About Me</h1>
      <section class="mt-5 w-full">
        <label class="font-normal text-base">
          Hello there! My name is <b>Akhtar Hafiz Puliwarna</b>, but you can call me Akhtar or my
          alias "Arna". <br />
          Currently, I'm a 3rd year Information Technology student at Universitas Brawijaya,
          Indonesia.
        </label>
      </section>
    </header>
    <div class="px-100 flex flex-col">
      <section class="w-full my-10">
        <h2 class="font-semibold text-[2rem]">Interests</h2>
        <p class="font-medium text-base">
          As an individual, of course I have my interests. Over the years that I have spent learning
          about computers, I have taken a liking to Front-End Development. Especially, on the Web
          (and Mobile App too occasionally). Not only that, UI/UX and Game Design is also one of my
          interest. I even made a game once as a High School Project, more on that on
          <a href="/projects">projects</a>.
        </p>
      </section>
      <section class="w-full">
        <h2 class="font-semibold text-[2rem]">Skills</h2>
        <p class="font-medium text-base">
          I posses some technical and interpersonal skills, including but not limited to:
        </p>
        <div class="grid grid-cols-2 justify-around my-2.5 px-30 gap-10">
          <div class="p-5 bg-(--tertiary-color) text-slate-900">
            <p class="text-center font-semibold">Front-End</p>
            <ul class="list-none p-0">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Vue.js</li>
              <li>Tailwindcss</li>
            </ul>
          </div>
          <div class="p-5 bg-(--tertiary-color) text-slate-900">
            <p class="text-center font-semibold">Back-End</p>
            <ul class="list-none p-0">
              <li>PHP</li>
              <li>Golang</li>
              <li>Java</li>
              <li>Kotlin (limited)</li>
            </ul>
          </div>
          <div class="p-5 bg-(--tertiary-color) text-slate-900">
            <p class="text-center font-semibold">Tools</p>
            <ul class="list-none p-0">
              <li>Git</li>
              <li>Docker</li>
              <li>Figma</li>
              <li>Godot</li>
            </ul>
          </div>
          <div class="p-5 bg-(--tertiary-color) text-slate-900">
            <p class="text-center font-semibold">Soft Skills</p>
            <ul class="list-none p-0">
              <li>Teamwork</li>
              <li>Time management</li>
              <li>Attention to detail</li>
              <li>Leadership (limited)</li>
            </ul>
          </div>
        </div>
        <p class="font-medium text-base">
          ...and I am open to try other tools and learn new languages
        </p>
      </section>
      <section class="w-full">
        <h2 class="font-semibold text-[2rem]">Experience</h2>
      </section>
      <section class="w-full">
        <h2 class="font-semibold text-[2rem]">Contact</h2>
      </section>
    </div>
  </div>
</template>
