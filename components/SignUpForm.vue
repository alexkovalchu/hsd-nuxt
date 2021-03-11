<template>
  <div id="signupForm" class="md:mx-auto md:text-center">
    <h1 class='md:text-3xl md:mb-10'>Sign Up</h1>
    <div
      class="bg-white rounded border border-gray-500 md:mb-4 md:py-2 md:flex md:justify-center md:items-center">
      <img class="md:inline-block md:mr-2" src="~/assets/images/google-icon.svg" alt="">
      <span class="font-semibold">Sign in with Google</span>
    </div>
    <div class="md:flex md:items-center text-gray-400 md:mb-4">
      <hr class="md:w-5/12">
      <div class="md:w-2/12">Or</div>
      <hr class="md:w-5/12">
    </div>
    <form @submit.prevent="register">
      <div class="grid md:grid-cols-2 md:gap-x-2 md:gap-y-6">
        <div>
          <input v-model="user.name" class="border rounded w-full py-2 px-3 outline-none" type="text"
                 :class="{'border-red-600 placeholder-red-600': $v.user.name.$error}"
                 placeholder="Name">
          <div v-show="$v.user.email.$error" class="text-left text-red-600 text-sm md:mt-1">Email field is required
          </div>
        </div>
        <div>
          <input v-model="user.username" class="border rounded w-full py-2 px-3 outline-none" type="text"
                 :class="{'border-red-600 placeholder-red-600': $v.user.username.$error}"
                 placeholder="Username">
          <div v-show="$v.user.email.$error" class="text-left text-red-600 text-sm md:mt-1">Username field is required
          </div>
        </div>
        <div class="md:col-span-2">
          <input v-model="user.email" class="border rounded w-full py-2 px-3 outline-none" type="email"
                 :class="{'border-red-600 placeholder-red-600': $v.user.email.$error}"
                 placeholder="Email">
          <div v-show="$v.user.email.$error" class="text-left text-red-600 text-sm md:mt-1">Email field is required
          </div>
        </div>
        <div class="md:col-span-2">
          <input v-model="user.password" class="border rounded w-full py-2 px-3 outline-none"
                 type="password"
                 :class="{'border-red-600 placeholder-red-600': $v.user.password.$error}"
                 placeholder="Password">
          <div v-show="$v.user.email.$error" class="text-left text-red-600 text-sm md:mt-1">Password field is required
          </div>
        </div>
        <button class="bg-black rounded text-white block w-full py-2 md:col-span-2">Sign Up</button>
      </div>
    </form>
    <div class="text-gray-500 md:mt-3">Do you have an account?
      <router-link to="/login" class="text-black">Sign in</router-link>
    </div>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required} from 'vuelidate/lib/validators'

export default {
  name: "SignUpForm",
  mixins: [validationMixin],
  data() {
    return {
      user: {
        name: '',
        username: '',
        email: '',
        password: ''
      }
    }
  },
  validations: {
    user: {
      name: {
        required
      },
      username: {
        required
      },
      email: {
        required,
      },
      password: {
        required
      }
    }
  },
  methods: {
    register() {
      this.$v.$touch()
    }
  }
}
</script>

<style scoped>
#signupForm {
  width: 380px;
}
</style>
