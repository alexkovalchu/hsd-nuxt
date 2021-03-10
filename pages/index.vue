<template>
  <div>
    <Header>
      <img id="notification" src="~/assets/images/notification-icon.svg" alt="">
      <img id="profile" src="~/assets/images/profile.svg" alt="">
      <button>write</button>
    </Header>
    <div id="content">
      <h1 class="font-bold text-4xl">I was wrong about macOS Big Sur...</h1>
      <p class="mb-8">
        A month ago, I published my story about macOS Big Sur review. I wrote about how macOS Big Sur has a big design
        overhaul, however with a performance bummer. Last time when I reviewed it, my early-2020 Base Model MacBook Pro
        had a significant performance decrease in speed and battery life, which made me unhappy with the update. Take
        note
        that this was the first public release of macOS Big Sur.
      </p>
      <p class="mb-8">
        Not long ago after I published that story, Apple released a new update for Big Sur, which is 11.1. I also
        received
        some feedback from the Medium community here saying that I used too much non-Apple application, which has a
        significant hit on performance and battery (in particular, Google Chrome).
      </p>
      <p class="mb-8">
        That’s why, I decided to have a little experiment, which is to go full-on Safari. I also decided to not charge
        my
        MacBook Pro not often and see how much it lasts for a single charge.
      </p>
      <p class="mb-8">The result was surprising to me and I have to admit that I ate up my own words on my previous
        story. It is
        crazy
        how heavy the impact is from a third-party application. Well, Chrome is definitely a fast browser, but also fast
        in draining my MacBook’s battery.</p>
      <p class="mb-8">
        My experience with Safari is very smooth, as I don’t need to worry about plugging my MacBook oftenly. Checking
        emails, social media, watching YouTube and writing stories in Medium did not affect my battery significantly.
        Plus, I also get better security with Safari with its latest tracking prevention update.
      </p>
      <p>
        Last time when I use Safari in Catalina, YouTube only capable of showing 1080p videos at its max resolution.
        Now,
        the new update allows Safari to view up to 4k HDR content, which makes me happier. It means that I can continue
        using Safari to watch high-quality videos.
      </p>
      <div v-show="showIcon" :style="{
        left: `${left}px`,
        top: `${top}px`
      }" class="highlightIcon">
        <img @click="selectHighlighted" src="~/assets/images/edit-menu.svg" alt="">
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {Footer, Header},
  data() {
    return {
      left: 0,
      top: 0,
      showIcon: false,
    }
  },
  mounted() {
    const content = document.querySelector('#content')
    content.addEventListener('mouseup', this.highlight)
  },
  methods: {
    highlight(e) {
      const selection = window.getSelection();
      const selectionRange = selection.getRangeAt(0);
      // startNode is the element that the selection starts in
      const startNode = selectionRange.startContainer.parentNode
      // endNode is the element that the selection ends in
      const endNode = selectionRange.endContainer.parentNode
      if (!startNode.isSameNode(startNode) || !startNode.isSameNode(endNode)) {
        this.showIcon = false
        return
      }

      // Get the left, top, and width of the selection
      const {left, top, width} = selectionRange.getBoundingClientRect()

      // If width === 0 (i.e. no selection)
      // Then, hide the menu
      if (!width) {
        this.showIcon = false
        return
      }

      // Finally, if the selection is valid,
      // set the position of the menu element,
      // set selectedText to content of the selection
      // then, show the menu
      this.left = left + (width / 2)
      this.top = top + window.scrollY - 50
      this.showIcon = true
    },
    selectHighlighted() {
      const selection = window.getSelection();
      const selectionRange = selection.getRangeAt(0);
      let span = document.createElement('span');
      span.setAttribute('class', 'highlighted')
      selectionRange.surroundContents(span);
      this.showIcon = false
      selection.removeAllRanges()
    },
    replaceBetween(origin, startIndex, endIndex, insertion) {
      return origin.substring(0, startIndex) + insertion + origin.substring(endIndex);
    }
  }
}
</script>

<style>
#content {
  margin: 60px 240px;
  padding: 80px 100px;
  background: white;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

#content h1 {
  margin-bottom: 30px;
}

#content p {
  font-size: 20px;
}


.highlightIcon {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
