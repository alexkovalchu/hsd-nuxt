<template>
  <div class="md:mx-56 md:my-12">
    <h1 class="border-b border-gray-400 md:text-3xl md:pb-4">Account Settings</h1>
    <div class="md:flex md:mt-16">
      <div class="md:w-3/12">
        <img class="md:w-24 md:h-auto" loading="lazy" decoding="async" src="~/assets/images/profile.svg" alt="">
        <button class="md:ml-6 font-medium">Update</button>
      </div>
      <div class="md:w-9/12">
        <form action="">
          <div class="md:mb-6">
            <label for="" class="text-gray-600 md:mb-2 md:inline-block">Name</label>
            <div class="md:flex md:items-center">
              <div>Sowmay</div>
              <button class="md:ml-6 font-medium">Update</button>
            </div>
          </div>
          <div class="md:mb-6">
            <label for="" class="text-gray-600 md:mb-2 md:inline-block">Username</label>
            <div class="md:flex md:items-center">
              <div>@champ.sowmay</div>
              <button class="md:ml-6 font-medium">Update</button>
            </div>
          </div>
          <div class="md:mb-6">
            <label for="" class="text-gray-600 md:mb-2 md:inline-block">Email</label>
            <div class="md:flex md:items-center">
              <div>champ.sowmay@gmail.com</div>
              <button class="md:ml-6 font-medium">Update</button>
            </div>
          </div>
          <div class="md:mb-16">
            <label for="" class="text-gray-600 md:mb-2 md:inline-block">Password</label>
            <div class="md:flex md:items-center">
              <div>******</div>
              <button class="md:ml-6 font-medium">Update</button>
            </div>
          </div>
          <div>
            <label for="" class="md:mb-2 md:inline-block font-medium">Email Preference</label>
            <div class="md:flex md:items-center">
              <div>Choose the types of emails you want to receive from HSD</div>
              <button class="md:ml-6 font-medium">Update</button>
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
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}
</style>
