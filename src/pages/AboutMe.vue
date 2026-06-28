<script setup></script>

<template>
  <div>
    <header
      class="py-10 bg-linear-to-b from-(--main-color) via-(--main-color) to-(--bg) text-center"
    >
      <h1 class="font-bold text-7xl">About Me</h1>
      <div class="mt-5 w-full">
        <p class="font-normal text-base">
          Hello there! My name is <b>Akhtar Hafiz Puliwarna</b>, but you can call me Akhtar or my
          alias "Arna". <br />
          Currently, I'm a 3rd year Information Technology student at Universitas Brawijaya,
          Indonesia.
        </p>
      </div>
    </header>
    <div class="px-90 flex flex-col">
      <section class="w-full my-5">
        <h2 class="font-semibold text-[2rem]">Interests</h2>
        <p class="font-medium text-base text-justify">
          As an individual, of course I have my interests. Over the years that I have spent learning
          about computers, I have taken a liking to Front-End Development. Especially, on the Web
          (and Mobile App too occasionally). Not only that, UI/UX and Game Design is also one of my
          interest. I even made a game once as a High School Project, more on that on
          <a
            href="/projects"
            class="px-1.5 bg-(--main-color) text-white text-center rounded-xl transition-[color,background-color,box-shadow,transform] duration-200 ease-in-out hover:bg-(--tertiary-color) hover:shadow-[0_0_16px_var(--main-color)] hover:-translate-y-0.5"
            >projects</a
          >.
        </p>
      </section>
      <section class="w-full my-5">
        <h2 class="font-semibold text-[2rem]">Skills</h2>
        <p class="font-medium text-base">
          I posses some technical and interpersonal skills, including but not limited to:
        </p>
        <div class="grid grid-cols-4 justify-around py-2 gap-5">
          <div
            class="p-3 bg-linear-to-tl from-violet-950 to-purple-900 border border-violet-700 text-white flex flex-col gap-2 transform-gpu hover:scale-110 hover:shadow-[0_0_20px_var(--main-color)] duration-200 ease-in-out"
          >
            <p class="text-center font-semibold">Front-End</p>
            <ul class="list-disc list-inside p-0 m-0">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Vue.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div
            class="p-3 bg-linear-to-tl from-violet-950 to-purple-900 border border-violet-700 text-white flex flex-col gap-2 transform-gpu hover:scale-110 hover:shadow-[0_0_20px_var(--main-color)] duration-200 ease-in-out"
          >
            <p class="text-center font-semibold">Back-End</p>
            <ul class="list-disc list-inside p-0">
              <li>PHP</li>
              <li>Java</li>
              <li>Golang (still learning)</li>
              <li>Rust (still learning)</li>
            </ul>
          </div>
          <div
            class="p-3 bg-linear-to-tl from-violet-950 to-purple-900 border border-violet-700 text-white flex flex-col gap-2 transform-gpu hover:scale-110 hover:shadow-[0_0_20px_var(--main-color)] duration-200 ease-in-out"
          >
            <p class="text-center font-semibold">Tools</p>
            <ul class="list-disc list-inside p-0">
              <li>Git</li>
              <li>Docker</li>
              <li>Figma</li>
              <li>Godot</li>
            </ul>
          </div>
          <div
            class="p-3 bg-linear-to-tl from-violet-950 to-purple-900 border border-violet-700 text-white flex flex-col gap-2 transform-gpu hover:scale-110 hover:shadow-[0_0_20px_var(--main-color)] duration-200 ease-in-out"
          >
            <p class="text-center font-semibold">Soft Skills</p>
            <ul class="list-disc list-inside p-0">
              <li>Teamwork</li>
              <li>Time management</li>
              <li>Attention to detail</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="w-full my-5">
        <h2 class="font-semibold text-[2rem]">Experience</h2>
        <div class="grid grid-cols-1 gap-5 py-2">
          <!-- Mobile Dev -->
          <div
            class="p-4 bg-linear-to-r from-violet-950 to-purple-900 text-white border-l-4 border-violet-500 ease-in-out duration-200 transition-all hover:translate-x-2 hover:border-l-violet-300"
          >
            <div class="flex flex-col">
              <div class="flex flex-col justify-between">
                <h3 class="font-bold text-2xl">Mobile App Development Lab Assistant</h3>
                <div class="py-3 flex flex-row gap-2">
                  <label
                    class="px-2 bg-violet-900 border-2 border-violet-600 rounded-full shadow-md shadow-violet-400/20"
                    for="institute"
                    >Fakultas Ilmu Komputer Universitas Brawijaya</label
                  >
                  <label
                    class="px-2 bg-violet-900 border-2 border-violet-600 rounded-full shadow-md shadow-violet-400/20"
                    for="date"
                    >Aug 2026 - Dec 2026</label
                  >
                </div>
              </div>
              <ol class="list-inside list-disc backdrop-blur-2xl">
                <li>
                  Led laboratory sessions on mobile application development for Android, focusing on
                  modern UI implementation.
                </li>
                <li>
                  Mentored students in understanding and applying Jetpack Compose as an efficient
                  framework for application development.
                </li>
              </ol>
            </div>
          </div>
          <!-- MD end -->
          <!-- MMD start -->
          <div
            class="p-4 bg-linear-to-r from-violet-950 to-purple-900 text-white border-l-4 border-violet-500 transition-all duration-200 ease-in-out hover:translate-x-2 hover:border-l-violet-300"
          >
            <div class="flex flex-col">
              <div class="flex flex-col justify-between">
                <h3 class="font-bold text-2xl">Staff of Multimedia and Documentation</h3>
                <div class="py-3 flex flex-row gap-2">
                  <label
                    class="px-2 bg-violet-900 border-2 border-violet-600 rounded-full shadow-md shadow-violet-400/20"
                    for="institute"
                    >MMD FILKOM UB 2025</label
                  >
                  <label
                    class="px-2 bg-violet-900 border-2 border-violet-600 rounded-full shadow-md shadow-violet-400/20"
                    for="date"
                    >Jul 2025 - Aug 2025</label
                  >
                </div>
              </div>
              <ol class="list-inside list-disc">
                <li>
                  Handled multimedia asset production, including graphic design creation and video
                  editing for event documentation
                </li>
                <li>
                  Served as a speaker for the Digital Design Workshop held for SMK PGRI
                  Tulungrejo-Gandusari students, providing technical guidance on creative design.
                </li>
              </ol>
            </div>
          </div>
          <!-- MMD end -->
          <!-- UI start -->
          <div
            class="p-4 bg-linear-to-r from-violet-950 to-purple-900 text-white border-l-4 border-violet-500 transition-all duration-200 ease-in-out hover:translate-x-2 hover:border-l-violet-300"
          >
            <div class="flex flex-col">
              <div class="flex flex-col justify-between">
                <h3 class="font-bold text-2xl">UI Design Lab Assistant</h3>
                <div class="py-3 flex flex-row gap-2">
                  <label
                    class="px-2 bg-violet-900 border-2 border-violet-600 rounded-full shadow-md shadow-violet-400/20"
                    for="institute"
                    >Fakultas Ilmu Komputer Universitas Brawijaya</label
                  >
                  <label
                    class="px-2 bg-violet-900 border-2 border-violet-600 rounded-full shadow-md shadow-violet-400/20"
                    for="date"
                    >Mar 2025 - Jul 2025</label
                  >
                </div>
              </div>
              <ol class="list-inside list-disc">
                <li>
                  Acted as a technical mentor by teaching fundamental principles of User Interface
                  (UI/UX) design to student.
                </li>
                <li>
                  Provided practical instruction on technical implementation using HTML, CSS, and
                  basic JavaScript for web interface development.
                </li>
              </ol>
            </div>
          </div>
          <!-- UI end -->
          <!-- DPM start -->
          <div
            class="p-4 bg-linear-to-r from-violet-950 to-purple-900 text-white border-l-4 border-violet-500 transition-all duration-200 ease-in-out hover:translate-x-2 hover:border-l-violet-300"
          >
            <div class="flex flex-col">
              <div class="flex flex-col justify-between">
                <h3 class="font-bold text-2xl">Staff of Media and Communication</h3>
                <div class="py-3 flex flex-row gap-2">
                  <label
                    class="px-2 bg-violet-900 border-2 border-violet-600 rounded-full shadow-md shadow-violet-400/20"
                    for="institute"
                    >DPM FILKOM UB</label
                  >
                  <label
                    class="px-2 bg-violet-900 border-2 border-violet-600 rounded-full shadow-md shadow-violet-400/20"
                    for="date"
                    >Feb 2025 - Dec 2025</label
                  >
                </div>
              </div>
              <ol class="list-inside list-disc">
                <li>
                  Managed the organization's digital infrastructure, including website development,
                  hosting maintenance, and ensuring optimal site performance
                </li>
                <li>
                  Developed creative visual content and graphic designs for Instagram to strengthen
                  public communication and organizational branding.
                </li>
              </ol>
            </div>
          </div>
          <!-- DPM end -->
        </div>
      </section>
    </div>
  </div>
</template>
