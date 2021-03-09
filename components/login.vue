<template>
  <div class="login-div">
    <h1 class="text-3xl mb-10 font-semibold">Welcome Back</h1>
    <button class="w-full rounded-md p-3 my-1 border bg-white border-gray-500">
      Sign In with Google
    </button>
   <div class="separator text-gray-500 border-gray-500 my-2">
     <span class="px-2">
       Or
     </span>
   </div>
    <input type="text" class="my-2 focus:outline-none focus:ring-4 focus:border-blue-500 border-gray-400 border rounded-md w-full" placeholder="Email">
    <p class="text-gray-500 my-1 w-full text-sm text-right cursor-pointer">Forgot Password ?</p>
    <input type="text" class="my-2 focus:outline-none focus:ring-4 focus:border-blue-500 border-gray-400 border rounded-md w-full" placeholder="Password">
    <button class="w-full rounded-md p-3 mb-1 mt-5 bg-black text-white">
      Sign In
    </button>
    <p class="my-2 text-sm">
      <span class="text-gray-500">
        Don't have an account?
      </span>
      <span class="cursor-pointer">
        Sign Up
      </span>
    </p>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.login-div {
  min-width: 380px;
  text-align: center;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
input {
  padding: 11px;
}

.separator {
  display: flex;
  align-items: center;
  text-align: center;
}

.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #e2e8f0;
}

.separator:not(:empty)::before {
  margin-right: .25em;
}

.separator:not(:empty)::after {
  margin-left: .25em;
}
</style>