<template>
  <div>
    <Header>
      <img id="notification" src="~/assets/images/notification-icon.svg" alt="">
      <img id="profile" src="~/assets/images/profile.svg" alt="">
    </Header>
    <form action="" class="relative md:my-24 md:mx-64">
      <div class="absolute right-0 top-0">
        <img class="ml-auto" src="~/assets/images/image.svg" alt="">
        <div class="border border-gray-300 shadow-sm text-gray-600 font-roboto text-sm bg-white md:mt-3 md:rounded-lg md:py-2 md:pl-4 md:pr-10">
          <div class="md:mb-2"><img class="inline-block md:mr-2" src="~/assets/images/image-light.svg" alt="">Upload an Image</div>
          <div><img class="inline-block md:mr-2" src="~/assets/images/video.svg" alt="">Upload Video or GIF</div>
        </div>
      </div>
      <input type="text" class="bg-transparent outline-none placeholder-gray-700 md:text-4xl md:font-bold md:w-full"
             placeholder="Title">
      <textarea name="" id="content" cols="30" rows="15"
                class="bg-transparent outline-none appearance-none resize-none md:w-full md:mt-4 md:text-lg"
                placeholder="write your notes..."></textarea>
      <hr class="md:mb-12">
      <div class="font-roboto md:flex md:items-center md:justify-between">
        <div class="md:flex md:items-center">
<!--          <div class="custom-checkbox">-->
<!--          </div>-->
          <input type="checkbox" checked class="">
          <label class="md:text-sm md:ml-4" for="">Private</label>
          <div :class="{'border rounded':showInfo}" class="flex items-center md:ml-4 md:py-1 md:px-2">

            <img @mouseleave="showInfo=false" @mouseenter="showInfo=true"
                 :src="!showInfo ? infoImg : infoBlackImg"
                 alt="">
            <span v-show="showInfo" class="md:ml-2 md:text-sm">Only invited people to the notes can see the note</span>
          </div>
        </div>
        <div>
          <button class="primary-btn">publish</button>
        </div>
      </div>
    </form>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default {
  name: "create",
  data() {
    return {
      showInfo: false,
      infoImg: require('~/assets/images/info.svg'),
      infoBlackImg: require('~/assets/images/info-black.svg')
    }
  },
  components: {Footer, Header}
}
</script>

<style scoped>
.custom-checkbox input {
  visibility: hidden;
}

.custom-checkbox:before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  padding: 8px;
  background: #FAFAFA;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  @apply border border-gray-400;
}
</style>
