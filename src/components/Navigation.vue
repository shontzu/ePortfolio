<template>
  <div>
    <ul>
      <a href="https://github.com/yuuchin"><img src="../assets/icon-gh.png" alt="github" /></a>
      <a href="https://linkedin.com/in/shontzu"><img src="../assets/icon-ln.png" alt="linkedin" /></a>
      <a href="https://www.instagram.com/shontzu/"><img src="../assets/icon-ig.png" alt="instagram" /></a>
      <a href="mailto:shontzuforever@gmail.com"><img src="../assets/icon-gm.png" alt="gmail" /></a>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  position: fixed;
  max-width: 100vw;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255,255,255,0.5);
}

ul {
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align:right;
}

a {
  color: pink;
  text-decoration: none;
}

img:hover {
  transform: scale(1.1);
}
</style>
