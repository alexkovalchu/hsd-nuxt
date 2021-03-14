<template>
  <div>
    <div v-for="highlight in highlights"
         :key="highlight.id"
         class="bg-white rounded-lg shadow-sm border border-gray-100 md:p-3 md:mb-3">
      <div class="md:flex md:items-center md:justify-between md:mb-2">
        <div class="md:flex md:items-center md:space-x-3">
          <img src="~/assets/images/profile.svg" alt="">
          <div class="text-sm">
            <div class="font-bold">Sowmay</div>
            <div>15:22AM</div>
          </div>
        </div>
        <div>
          <div class="flex justify-end linkCopyActions md:space-x-3">
            <img src="~/assets/images/eye-button.svg" alt="">
            <img class="cursor-pointer" @click="copyLink" src="~/assets/images/link-button.svg" alt="">
          </div>
          <div
            class="linkCopied hidden bg-black text-white rounded-md font-roboto font-medium text-sm flex items-center md:px-4 md:py-1.5">
            <span>Link Copied</span> <img class="inline-block md:ml-2" src="~/assets/images/link-copied.svg" alt="">
          </div>
        </div>
      </div>
      <div class="bg-gray-100 rounded-md rounded-tl-xl relative md:px-2 md:py-3 md:mb-3">
            <span
              :class="[highlight.color]"
              class="rounded-full inline-block absolute top-0 left-0 md:py-1 md:px-2 md:text-xs md:font-medium font-roboto">Page 172</span>
        <div class="font-tinos md:mt-4">{{ highlight.text }}</div>
      </div>
      <div class="text-center md:mb-3">
        <a @click.prevent="toggleDiscussions" v-if="highlight.discussions.length" href=""
           class="font-medium font-roboto text-sm underline">
          <span>View discussions ({{ highlight.discussions.length }})</span>
          <span class="hidden">Skip discussions ({{ highlight.discussions.length }})</span>
        </a>
        <a v-else href="" class="font-medium font-roboto text-sm underline">Start Discussion</a>
      </div>
      <div class="discussionsContainer hidden">
        <div class="divide-y">
          <div v-for="message in highlight.discussions" :key="message.id" class="md:py-3">
            <div
              class="md:flex md:items-center md:justify-between md:mb-1">
              <div class="md:flex md:items-center md:space-x-3">
                <img src="~/assets/images/profile.svg" alt="">
                <div class="text-sm">
                  <div class="font-bold">{{ message.author }}</div>
                  <div class="md:text-xs">15:22AM</div>
                </div>
              </div>
              <div>
                <img src="~/assets/images/expand.svg" alt="">
              </div>
            </div>
            <div class="text-sm">{{ message.text }}</div>
          </div>
        </div>
        <div>
          <input @input="inputChangeHandler" type="text"
                 class="border border-gray-300 w-full rounded-md focus:outline-none placeholder-gray-300 md:px-3.5 md:py-1 md:mb-3 md:leading-tight"
                 placeholder="Add a note...">
          <div class="text-right emptyText">
            <button
              class="text-white bg-gray-300 capitalize font-roboto text-sm md:font-medium md:px-6 md:py-1.5 md:rounded-md">
              send
            </button>
          </div>
          <div class="text-right filledText hidden">
            <button
              class="text-black bg-gray-300 capitalize font-roboto text-sm md:font-medium md:px-6 md:py-1.5 md:rounded-md">
              Cancel
            </button>
            <button
              class="text-white bg-black capitalize font-roboto text-sm md:font-medium md:px-6 md:py-1.5 md:rounded-md">
              send
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-lg shadow-sm border border-gray-100 md:p-3">
      <div class="md:flex md:items-center md:justify-between md:mb-2">
        <div class="md:flex md:items-center md:space-x-3">
          <img src="~/assets/images/profile.svg" alt="">
          <div class="text-sm">
            <div class="font-bold">Sowmay</div>
            <div>15:22AM</div>
          </div>
        </div>
        <div class="flex md:space-x-3">
          <img src="~/assets/images/eye-button.svg" alt="">
          <img src="~/assets/images/link-button.svg" alt="">
        </div>
      </div>
      <div class="bg-gray-100 rounded-md rounded-tl-xl relative md:px-2 md:py-3 md:mb-3">
            <span
              class="rounded-full pink inline-block absolute top-0 left-0 md:py-1 md:px-2 md:text-xs md:font-medium font-roboto">Page 172</span>
        <div class="md:mt-4">Last time when I reviewed it,</div>
      </div>
      <div class="text-center">
        <a href="" class="font-medium font-roboto text-sm underline">Start Discussion</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Highlights",
  props: ['highlights'],
  methods: {
    toggleDiscussions(e) {
      const discussionContainer = e.target.closest('div.text-center').nextElementSibling;
      const {parentNode} = e.target;
      parentNode.querySelectorAll('span').forEach(el => {
        el.classList.toggle('hidden')
      })
      discussionContainer.classList.toggle('hidden')
    },
    inputChangeHandler(e) {
      const {value, parentNode} = e.target;
      if (value) {
        parentNode.querySelector('.filledText').classList.remove('hidden')
        parentNode.querySelector('.emptyText').classList.add('hidden')
      } else {
        parentNode.querySelector('.filledText').classList.add('hidden')
        parentNode.querySelector('.emptyText').classList.remove('hidden')
      }
    },
    copyLink(e) {
      const linkActions = e.target.closest('.linkCopyActions');
      const linkCopied = linkActions.nextElementSibling;
      linkActions.classList.toggle('hidden');
      linkCopied.classList.toggle('hidden');
      setTimeout(() => {
        linkActions.classList.toggle('hidden');
        linkCopied.classList.toggle('hidden');
      }, 2000)
    }
  }
}
</script>

<style scoped>

</style>
