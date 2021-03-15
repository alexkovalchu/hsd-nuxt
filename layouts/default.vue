<template>
  <div class="wrapper font-sans">
    <Nuxt/>
  </div>
</template>
<script>
import Header from "../components/header/Header";
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
}

.logo {
  font-size: 30px;
  font-weight: 700;
}
</style>
