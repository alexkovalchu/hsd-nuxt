<template>
  <div class="vScreen md:flex md:items-center md:py-24">
    <SignUpForm></SignUpForm>
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm";

export default {
  name: "Register",
  components: {SignUpForm},
}
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}

.vScreen {
  min-height: calc(100vh - 170px);
}
</style>
