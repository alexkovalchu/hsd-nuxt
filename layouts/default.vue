<template>
  <div class="wrapper">
    <Header></Header>
    <Nuxt/>
    <Footer></Footer>
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

.highlighted {
  background: #D3D3D3
}

.logo {
  font-size: 30px;
  font-weight: 700;
}




</style>
