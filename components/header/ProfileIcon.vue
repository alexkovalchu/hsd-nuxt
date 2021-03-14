<template>
  <div class="relative ml-5">
    <img @click="showDropDown" class="cursor-pointer" id="profile" src="~/assets/images/profile.svg" alt="">
    <div id="dropdown" class="hidden bg-white absolute border border-gray-300 rounded md:px-5 md:py-3">
      <ul>
        <li>
          <nuxt-link class="w-full block md:py-1" to="/">Account</nuxt-link>
        </li>
        <li>
          <nuxt-link class="w-full block md:py-1" to="/">Notes</nuxt-link>
        </li>
        <li>
          <nuxt-link class="w-full block md:py-1" to="/">Bookmarks</nuxt-link>
        </li>
        <li class="border-t">
          <nuxt-link class="text-red-400 w-full block font-semibold md:py-1" to="/">Sign Out</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileIcon",
  mounted() {
    window.addEventListener('click', function (e) {
      if (!e.target.matches('#profile')) {
        const el = document.getElementById('dropdown');
        if (el) {
          if (!el.classList.contains('hidden')) {
            el.classList.add('hidden')
          }
        }
      }
    })
  },
  methods: {
    showDropDown() {
      const el = document.getElementById('dropdown')
      el.classList.toggle('hidden')
    }
  }
}
</script>

<style scoped>
#dropdown {
  width: 200px;
  top: 55px;
  right: 0;
}
</style>
