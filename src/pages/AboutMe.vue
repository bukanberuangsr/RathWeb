<script setup></script>

<template>
  <div class="content">
    <header>
      <h1>About Me</h1>
    </header>
    <section class="desc">
      <p>
        Hello there! My name is <b>Akhtar Hafiz Puliwarna</b>, but you can call me Akhtar.
        Currently, I'm a 3rd year Information Technology student at Universitas Brawijaya,
        Indonesia.
      </p>
    </section>
    <section class="interest">
      <h2>Interests</h2>
      <p>
        As an individual, of course I have my interests. Over the years that I have spent learning
        about computers, I have taken a liking to Front-End Development. Especially, on the Web (and
        Mobile App too occasionally). Not only that, UI/UX and Game Design is also one of my
        interest. I even made a game once as a High School Project, more on that on
        <a href="/projects">projects</a>.
      </p>
    </section>
    <section class="skill">
      <h2>Skills</h2>
      <p>I posses some technical and interpersonal skills, including but not limited to:</p>
      <div class="skill-content">
        <div class="fe">
          <span>Front-End</span>
          <ul>
            <li>HTML & CSS</li>
            <li>Javascript</li>
            <li>Vue.js</li>
          </ul>
        </div>
        <div class="be">
          <span>Back-End</span>
          <ul>
            <li>PHP</li>
            <li>Golang</li>
            <li>Java</li>
            <li>Kotlin (limited)</li>
          </ul>
        </div>
        <div class="tools">
          <span>Tools</span>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>Figma</li>
            <li>Godot</li>
          </ul>
        </div>
        <div class="personal-skill">
          <span>Soft Skills</span>
          <ul>
            <li>Teamwork</li>
            <li>Time management</li>
            <li>Attention to detail</li>
            <li>Leadership (limited)</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="experience">
      <h2>Experience</h2>
    </section>
    <section class="contact">
      <h2>Contact</h2>
    </section>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin: 0 auto;
  padding: 0 60px;
  gap: 24px;
  max-width: 820px;
  text-align: justify;
}

header {
  text-align: center;
  h1 {
    font-size: 5em;
    font-weight: 700;
  }
}

section {
  width: 100%;
  h2 {
    font-weight: 600;
    font-size: 2rem;
  }
  p {
    font-weight: 500;
    font-size: 1rem;
  }
}

.skill-content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px 0;
}
</style>
