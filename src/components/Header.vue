<template>
  <header>
    <img id="banner" src="../static/pink.jpg" alt="pink banner" />
    <div>
      <picture>
        <source media="(max-width: 600px)" srcset="../static/IMG_20220202_200424narrow.png" />
        <source media="(min-width: 100px)" srcset="../static/IMG_20220202_200424.png" />
        <img id="portrait" src="../static/IMG_20220202_200424.png" alt="Portrait of me"/>
      </picture>

      <picture>
        <source media="(max-width: 600px)" srcset="../static/IMG_20220202_200436narrow.png" />
        <source media="(min-width: 1000px)" srcset="../static/IMG_20220202_200436.png" />
        <img id="portrait" src="../static/IMG_20220202_200436.png" alt="Portrait of me" />
      </picture>
    </div>
    <span>
      <h1>Keoy Shon Tzu</h1>
      <h2>Web Developer</h2>
      <button>
        <a href="https://drive.google.com/file/d/1hsZxMOJsYJwY3NErwz2rH-cNAlpm52a1/view?usp=sharing" download="resume">Download Resume</a>
      </button>
      <button>
        <a href="https://drive.google.com/file/d/14qf-YB2-0YSu0pZ8XETUUiss_wx4WGIZ/view?usp=sharing" download="portfolio">Download Portfolio</a>
      </button>
    </span>
  </header>
</template>

<script>
export default {
  components: {
      name: "header",
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#banner {
  height: 60vh;
  width: 100vw;
}

#portrait {
  position: relative;
  top: 5vh;
  height: 50vh;
}

div {
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
}

button {
  padding: 10px;
  border: 1px solid darkred;
  background-color: rgba(255, 192, 203, 0);
  border-radius: 5px;
}

button:hover {
  box-shadow: inset 1px 1px 1px rosybrown;
}
a {
  color: palevioletred;
  text-decoration: none;
}
span {
  position: absolute;
}
@media screen and (max-width: 1000px) {
  span {
    background-color: rgba(255, 255, 255, 0.6);
    padding: 20px;
  }
}
</style>