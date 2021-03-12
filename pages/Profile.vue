<template>
  <div>
    <Header>
      <img id="notification" src="~/assets/images/notification-icon.svg" alt="">
      <img id="profile" src="~/assets/images/profile.svg" alt="">
      <button class="primary-btn">write</button>
    </Header>
    <div class="md:mx-56 md:my-12">
      <h1 class="border-b border-gray-400 md:text-3xl md:pb-4">Account Settings</h1>
      <div class="md:flex md:mt-16">
        <div class="md:w-3/12">
          <img class="md:w-24 md:h-auto" loading="lazy" decoding="async" src="~/assets/images/profile.svg" alt="">
          <button class="md:ml-6 md:mt-4 font-medium focus:outline-none">Update</button>
        </div>
        <div class="md:w-9/12">
          <form action="">
            <div class="md:mb-6">
              <label class="text-gray-600 md:mb-2 md:inline-block">Name</label>
              <div class="md:flex md:items-center">
                <input v-if="allowUpdate.name" type="text" v-model="user.name"
                       class="border border-gray-400 rounded outline-none md:py-1 md:px-2"
                       name="name">
                <div v-else>Sowmay</div>
                <button type="button" @click="allowUpdateHandler('name')"
                        class="md:ml-6 font-medium outline-none focus:outline-none">Update
                </button>
              </div>
            </div>
            <div class="md:mb-6">
              <label class="text-gray-600 md:mb-2 md:inline-block">Username</label>
              <div class="md:flex md:items-center">
                <input v-if="allowUpdate.username" type="text" v-model="user.username"
                       class="border border-gray-400 rounded outline-none md:py-1 md:px-2"
                       name="name">
                <div v-else>@champ.sowmay</div>
                <button type="button" @click="allowUpdateHandler('username')"
                        class="md:ml-6 font-medium focus:outline-none outline-none">Update
                </button>
              </div>
            </div>
            <div class="md:mb-6">
              <label class="text-gray-600 md:mb-2 md:inline-block">Email</label>
              <div class="md:flex md:items-center">
                <input v-if="allowUpdate.email" type="text" v-model="user.email"
                       class="border border-gray-400 rounded outline-none md:py-1 md:px-2"
                       name="name">
                <div v-else>champ.sowmay@gmail.com</div>
                <button type="button" @click="allowUpdateHandler('email')"
                        class="md:ml-6 font-medium focus:outline-none outline-none">Update
                </button>
              </div>
            </div>
            <div class="md:mb-16">
              <label class="text-gray-600 md:mb-2 md:inline-block">Password</label>
              <div class="md:flex md:items-center">
                <input v-if="allowUpdate.password" type="password" v-model="user.password"
                       class="border border-gray-400 rounded outline-none md:py-1 md:px-2"
                       name="name">
                <div v-else>●●●●●●●●</div>
                <button type="button" @click="allowUpdateHandler('password')"
                        class="md:ml-6 font-medium focus:outline-none outline-none">Update
                </button>
              </div>
            </div>
            <div>
              <label class="md:mb-2 md:inline-block font-medium">Email Preference</label>
              <div class="md:flex md:items-center">
                <div>Choose the types of emails you want to receive from HSD</div>
                <button class="md:ml-6 font-medium focus:outline-none outline-none">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="border-t border-gray-400 md:mt-64 md:py-4">
        <button class="text-red-600 md:font-medium">Delete Account</button>
        <div>Delete your account and account data</div>
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Profile",
  components: {Footer, Header},
  data() {
    return {
      user: {
        name: 'Sowmay',
        username: '@champ.sowmay',
        email: 'champ.sowmay@gmail.com',
        password: '123456'
      },
      allowUpdate: {
        name: false,
        username: false,
        email: false,
        password: false
      }
    }
  },
  methods: {
    allowUpdateHandler(field) {
      this.allowUpdate[field] = true
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}
</style>
