<template>
  <div class="vScreen flex items-center md:py-24">
    <div class="md:w-4/12 md:mx-auto md:text-center">
      <h1 class='md:text-3xl md:mb-10'>Welcome Back</h1>
      <div
        class="bg-white rounded border border-gray-500 md:mb-4 md:py-1 md:flex md:justify-center md:items-center">
        <img class="md:inline-block md:mr-2" src="~/assets/images/google-icon.svg" alt="">
        <span class="font-semibold">Sign in with Google</span>
      </div>
      <div class="md:flex md:items-center text-gray-400 md:mb-4">
        <hr class="md:w-5/12">
        <div class="md:w-2/12">Or</div>
        <hr class="md:w-5/12">
      </div>
      <form @submit.prevent="login">
        <div class="md:mb-2">
          <input v-model.trim="$v.user.email.$model" class="border rounded w-full py-2 px-2 outline-none"
                 :class="{'border-red-600 placeholder-red-600': $v.user.email.$error}" type="email"
                 placeholder="Email">
          <div v-show="$v.user.email.$error" class="text-left text-red-600 text-sm md:mt-1">Email field is required</div>
        </div>
        <div class="md:mb-6">
          <div class="text-right">
            <small class="text-gray-500 text-sm">Forgot password?</small>
          </div>
          <input v-model.trim="$v.user.password.$model" class="border rounded w-full py-2 px-2 outline-none"
                 :class="{'border-red-600 placeholder-red-600': $v.user.password.$error}"
                 type="password"
                 placeholder="Password">
          <div v-show="$v.user.email.$error" class="text-left text-red-600 text-sm md:mt-1">Password field is required</div>
        </div>
        <button class="bg-black rounded text-white w-full md:mt-1 py-2">Sign In</button>
      </form>
      <div class="text-gray-500 md:mt-3">Don't have an account?
        <router-link to="/register" class="text-black">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required} from 'vuelidate/lib/validators'

export default {
  name: "Login",
  mixins: [validationMixin],
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$v.$touch()
    }
  },
  validations: {
    user: {
      email: {
        required,
      },
      password: {
        required
      }
    }
  }
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
