<template>
  <div class="wrapper">
    <Nuxt/>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {Footer, Header}
}
</script>
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.wrapper {
  background: #fafafa;
  font-family: 'Tinos', serif;
}

.logo {
  font-size: 30px;
  font-weight: 700;
}
</style>
