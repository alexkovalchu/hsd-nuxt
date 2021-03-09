<template>
  <div class="login-wrapper">
    <Login />
  </div>
</template>
<script>
import Login from '@/components/login.vue'
export default {
  components: {
    Login
  }
}
</script>
<style scoped>
.login-wrapper {
  min-height: calc(100vh - 84px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>