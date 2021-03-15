<template>
  <div>
    <Header>
      <button class="primary-btn">home</button>
    </Header>
    <div class="vScreen font-roboto md:flex md:items-center">
      <SignUpForm></SignUpForm>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

export default {
  name: "Register",
  components: {Footer, Header, SignUpForm},
}
</script>

<style scoped>
</style>
