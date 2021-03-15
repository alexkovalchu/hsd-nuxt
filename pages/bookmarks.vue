<template>
  <div>
    <Header>
      <img id="notification" src="~/assets/images/notification-icon.svg" alt="">
      <img id="profile" src="~/assets/images/profile.svg" alt="">
      <button class="primary-btn">write</button>
    </Header>
    <div class="vScreen md:mx-24 md:my-12">
      <div class="font-roboto md:flex md:justify-between md:items-center md:mb-12">
        <div class="md:flex md:items-center">
          <img class="w-full h-full flex justify-center items-center rounded-full border-2 border-gray-400"
               src="~/assets/images/profile.svg" alt="">
          <div class="leading-tight md:ml-3 md:text-sm">
            <div class="md:font-semibold">Sowmay Jain</div>
            <div class="text-gray-700">@sowmay_jain</div>
          </div>
        </div>
        <div class="bg-white text-gray-600 md:flex md:rounded md:p-1 md:w-56">
          <button @click="changeActiveTab" name="Notes" :class="{'activeTab' : activeTab==='Notes'}"
                  class="outline-none focus:outline-none md:py-2 md:w-6/12 md:rounded">Notes
          </button>
          <button @click="changeActiveTab" name="Bookmarks" :class="{'activeTab' : activeTab==='Bookmarks'}"
                  class="outline-none focus:outline-none md:py-2 md:w-6/12 md:rounded">Bookmarks
          </button>
        </div>
      </div>
      <div v-if="activeTab==='Bookmarks'" class="auto-rows-fr md:grid md:grid-cols-5 md:gap-6">
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">I was wrong about macOS Big Sur...</h3>
          <p class="md:text-sm md:font-normal md:flex-1">A month ago, I published my story about macOS Big Sur review. I
            wrote
            about how macOS Big Sur has</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">I was wrong about macOS Big Sur...</h3>
          <p class="md:text-sm md:font-normal md:flex-1">A month ago, I published my story about macOS Big Sur review. I
            wrote
            about how macOS Big Sur has</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">Jeff Bezos Swallowed Our Economy Whole</h3>
          <p class="md:text-sm md:font-normal md:flex-1">Amid social, economic, and political chaos, regulators and
            antitrust
            lawyers on both sides of the Atlantic are circling Big Tech, with the aim of bringing Facebook, Google, and
            Apple to heel. </p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">Lou Dobbs’s Show Is Canceled by Fox</h3>
          <p class="md:text-sm md:font-normal md:flex-1">Mr. Dobbs, a loyal supporter of former President Donald J.
            Trump, was
            named in a $2.7 billion lawsuit filed on Thursday against the Fox Corporation and two other Fox anchors.</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">The 55 Richest Women In America</h3>
          <p class="md:text-sm md:font-normal md:flex-1">Walton (net worth: $62.3 billion), an heir to the Walmart
            fortune, saw
            her net worth climb nearly $11 billion since the 2019 Forbes 400 due to an uptick in Walmart stock after the
            company pivoted to online shopping for groceries and home goods during the pandemic.</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">I was wrong about macOS Big Sur...</h3>
          <p class="md:text-sm md:font-normal md:flex-1">A month ago, I published my story about macOS Big Sur review. I
            wrote
            about how macOS Big Sur has</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">I was wrong about macOS Big Sur...</h3>
          <p class="md:text-sm md:font-normal md:flex-1">A month ago, I published my story about macOS Big Sur review. I
            wrote
            about how macOS Big Sur has</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">Jeff Bezos Swallowed Our Economy Whole</h3>
          <p class="md:text-sm md:font-normal md:flex-1">Amid social, economic, and political chaos, regulators and
            antitrust
            lawyers on both sides of the Atlantic are circling Big Tech, with the aim of bringing Facebook, Google, and
            Apple to heel. </p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">Lou Dobbs’s Show Is Canceled by Fox</h3>
          <p class="md:text-sm md:font-normal md:flex-1">Mr. Dobbs, a loyal supporter of former President Donald J.
            Trump, was
            named in a $2.7 billion lawsuit filed on Thursday against the Fox Corporation and two other Fox anchors.</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">The 55 Richest Women In America</h3>
          <p class="md:text-sm md:font-normal md:flex-1">Walton (net worth: $62.3 billion), an heir to the Walmart
            fortune, saw
            her net worth climb nearly $11 billion since the 2019 Forbes 400 due to an uptick in Walmart stock after the
            company pivoted to online shopping for groceries and home goods during the pandemic.</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">I was wrong about macOS Big Sur...</h3>
          <p class="md:text-sm md:font-normal md:flex-1">A month ago, I published my story about macOS Big Sur review. I
            wrote
            about how macOS Big Sur has</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">I was wrong about macOS Big Sur...</h3>
          <p class="md:text-sm md:font-normal md:flex-1">A month ago, I published my story about macOS Big Sur review. I
            wrote
            about how macOS Big Sur has</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">Jeff Bezos Swallowed Our Economy Whole</h3>
          <p class="md:text-sm md:font-normal md:flex-1">Amid social, economic, and political chaos, regulators and
            antitrust
            lawyers on both sides of the Atlantic are circling Big Tech, with the aim of bringing Facebook, Google, and
            Apple to heel. </p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">Lou Dobbs’s Show Is Canceled by Fox</h3>
          <p class="md:text-sm md:font-normal md:flex-1">Mr. Dobbs, a loyal supporter of former President Donald J.
            Trump, was
            named in a $2.7 billion lawsuit filed on Thursday against the Fox Corporation and two other Fox anchors.</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">The 55 Richest Women In America</h3>
          <p class="md:text-sm md:font-normal md:flex-1">Walton (net worth: $62.3 billion), an heir to the Walmart
            fortune, saw
            her net worth climb nearly $11 billion since the 2019 Forbes 400 due to an uptick in Walmart stock after the
            company pivoted to online shopping for groceries and home goods during the pandemic.</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
      </div>
      <div v-else class="md:grid auto-rows-fr md:grid-cols-5 md:gap-6">
        <div
          class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:items-center md:justify-center md:flex-col md:p-5">
          <div>
            <img class="" src="~/assets/images/note.svg" alt="">
            <div class="text-lg text-gray-600 font-roboto">NEW</div>
          </div>
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">I was wrong about macOS Big Sur...</h3>
          <p class="md:text-sm md:font-normal md:flex-1">A month ago, I published my story about macOS Big Sur review. I
            wrote
            about how macOS Big Sur has</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">I was wrong about macOS Big Sur...</h3>
          <p class="md:text-sm md:font-normal md:flex-1">A month ago, I published my story about macOS Big Sur review. I
            wrote
            about how macOS Big Sur has</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">Jeff Bezos Swallowed Our Economy Whole</h3>
          <p class="md:text-sm md:font-normal md:flex-1">Amid social, economic, and political chaos, regulators and
            antitrust
            lawyers on both sides of the Atlantic are circling Big Tech, with the aim of bringing Facebook, Google, and
            Apple to heel. </p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">Lou Dobbs’s Show Is Canceled by Fox</h3>
          <p class="md:text-sm md:font-normal md:flex-1">Mr. Dobbs, a loyal supporter of former President Donald J.
            Trump, was
            named in a $2.7 billion lawsuit filed on Thursday against the Fox Corporation and two other Fox anchors.</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">The 55 Richest Women In America</h3>
          <p class="md:text-sm md:font-normal md:flex-1">Walton (net worth: $62.3 billion), an heir to the Walmart
            fortune, saw
            her net worth climb nearly $11 billion since the 2019 Forbes 400 due to an uptick in Walmart stock after the
            company pivoted to online shopping for groceries and home goods during the pandemic.</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
        <div class="font-tinos bg-white border border-gray-200 rounded-md shadow-sm md:flex md:flex-col md:p-5">
          <h3 class="md:font-bold md:text-lg md:mb-1">I was wrong about macOS Big Sur...</h3>
          <p class="md:text-sm md:font-normal md:flex-1">A month ago, I published my story about macOS Big Sur review. I
            wrote
            about how macOS Big Sur has</p>
          <img class="md:ml-auto md:self-end" src="~/assets/images/bookmark.svg" alt="">
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/header/Header";
import Footer from "../components/Footer";

export default {
  name: "bookmarks",
  data() {
    return {
      activeTab: 'Bookmarks'
    }
  },
  components: {Footer, Header},
  methods: {
    changeActiveTab(e) {
      const {name} = e.target;
      console.log(name)
      this.activeTab = name
    }
  }
}
</script>

<style scoped>
.activeTab {
  @apply bg-gray-300 text-black;
}
</style>
