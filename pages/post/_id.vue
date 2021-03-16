<template>
  <div>
    <Header>
      <img id="notification" src="~/assets/images/notification-icon.svg" alt="">
      <ProfileIcon></ProfileIcon>
      <button class="primary-btn">write</button>
      <button data-target="modal" @click="showSignUpForm" class="primary-btn">sign up</button>
    </Header>
    <div class="vScreen md:flex md:mx-24 md:my-14 md:space-x-4">
      <div id="content" :class="highlights.length ? '' : 'md:mx-auto'" class="font-tinos bg-white md:w-9/12">
        <h1 class="font-bold md:text-4xl md:mb-8">I was wrong about macOS Big Sur...</h1>
        <p class="mb-8">
          A month ago, I published my story about macOS Big Sur review. I wrote about how macOS Big Sur has a big design
          overhaul, however with a performance bummer. Last time when I reviewed it, my early-2020 Base Model MacBook
          Pro
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
          how heavy the impact is from a third-party application. Well, Chrome is definitely a fast browser, but also
          fast
          in draining my MacBook’s battery.</p>
        <p class="mb-8">
          My experience with Safari is very smooth, as I don’t need to worry about plugging my MacBook oftenly. Checking
          emails, social media, watching YouTube and writing stories in Medium did not affect my battery significantly.
          Plus, I also get better security with Safari with its latest tracking prevention update.
        </p>
        <p>
          Last time when I use Safari in Catalina, YouTube only capable of showing 1080p videos at its max resolution.
          Now,
          the new update allows Safari to view up to 4k HDR content, which makes me happier. It means that I can
          continue
          using Safari to watch high-quality videos.
        </p>
        <div v-show="showIcon" :style="{
        left: `${left}px`,
        top: `${top}px`
      }" class="highlightIcon">
          <div class="bg-black relative flex items-center md:p-2 rounded-md">
            <img class="border-r border-gray-400 md:pr-4" @click="selectHighlighted" src="~/assets/images/highlight.svg"
                 alt="">
            <button @click="changeColor('pink')" :class="{'selectedColor': currentColor==='pink'}"
                    class="w-4 h-4 md:ml-3 cursor-pointer flex items-center justify-center rounded-full pink"></button>
            <button @click="changeColor('gray')" :class="{'selectedColor': currentColor==='gray'}"
                    class="w-4 h-4 md:ml-3 cursor-pointer flex items-center justify-center rounded-full gray"></button>
            <button @click="changeColor('yellow')" :class="{'selectedColor': currentColor==='yellow'}"
                    class="w-4 h-4 md:ml-3 cursor-pointer flex items-center justify-center rounded-full yellow"></button>
            <button @click="changeColor('green')" :class="{'selectedColor': currentColor==='green'}"
                    class="w-4 h-4 md:ml-3 cursor-pointer flex items-center justify-center rounded-full green"></button>
          </div>
        </div>
      </div>
      <div v-if="highlights.length" class="md:w-3/12">
        <Highlights :highlights="highlights"></Highlights>
      </div>
    </div>
    <Footer></Footer>
    <Modal>
      <template v-slot:body>
        <sign-up-form></sign-up-form>
      </template>
    </Modal>
  </div>
</template>

<script>
import Header from "../../components/header/Header";
import Footer from "../../components/Footer";
import ProfileIcon from "../../components/header/ProfileIcon";


export default {
  name: 'post',
  components: {Footer, Header, ProfileIcon},
  data() {
    return {
      left: 0,
      top: 0,
      showIcon: false,
      currentColor: 'gray',
      highlights: [],
      currentSpan: null
    }
  },
  mounted() {
    const content = document.querySelector('#content')
    content.addEventListener('mouseup', this.highlight)
    content.addEventListener('mouseover', (e) => {
      const menu = document.querySelector('.highlightIcon');
      if (e.target.matches('span')) {
        const {offsetTop, offsetLeft} = e.target;
        this.left = offsetLeft
        this.top = offsetTop + window.scrollY - 50
        this.showIcon = true
        e.target.onmouseleave = (e) => {
          this.currentSpan = e.target
          // setTimeout((e) => {
          //   if (menu.contains(e.target)) {
          //     console.log('111')
          //   }
          //   this.showIcon = false
          // }, 500)
        }
        menu.onmouseleave = (e) => {
          this.showIcon = false
          this.currentSpan = null
        }
      }
    })
  },
  methods: {
    highlight(e) {
      // const highlightContainer = document.querySelector('.highlightIcon');
      const selection = window.getSelection();
      if (!selection.toString().length) {
        this.showIcon = false
        return;
      }

      const selectionRange = selection.getRangeAt(0);
      if (selection.toString().length === 0) {
        this.showIcon = false;
        return;
      }
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
      if (!selection.toString().length) {
        this.showIcon = false
        return;
      }
      const selectionRange = selection.getRangeAt(0);
      const uuid = `h-${Date.now().toString()}`;
      let span = document.createElement('span');
      span.setAttribute('class', this.currentColor)
      span.setAttribute('id', uuid);
      selectionRange.surroundContents(span);
      this.showIcon = false
      const discussions = [
        {
          id: 1,
          author: 'Sowmay',
          text: 'Did you know this?'
        },
        {
          id: 2,
          author: 'Vishva',
          text: 'Yes, I did!'
        },
        {
          id: 3,
          author: 'Sowmay',
          text: 'Oh! That\'s cool'
        }
      ]
      const highlight = {
        id: uuid,
        text: selection.toString(),
        color: this.currentColor,
        discussions
      }
      this.highlights.push(highlight)
      selection.removeAllRanges()
    },
    changeColor(color) {
      this.currentColor = color;
      if (this.currentSpan) {
        this.currentSpan.removeAttribute('class')
        this.currentSpan.classList.add(color)
        const id = this.currentSpan.getAttribute('id');
        const highlights = [...this.highlights]
        this.highlights = highlights.map(item => {
          if (item.id === id) {
            item.color = color
          }
          return item;
        });
      } else {
        this.selectHighlighted()
      }
    },
    showSignUpForm() {
      const body = document.querySelector('body')
      const modal = document.querySelector('.modal')
      const content = document.getElementById('content');
      modal.classList.remove('opacity-0')
      modal.classList.remove('pointer-events-none')
      body.classList.add('modal-active')
      if (content) {
        content.classList.toggle('blur')
      }
    },
  }
}
</script>

<style lang="scss">
#content {
  //margin: 60px 240px;
  padding: 80px 100px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.05);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}

#content p {
  font-size: 20px;
}


.highlightIcon {
  position: absolute;
  left: 0;
  top: 0;

  & > div::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: -10px;
    left: 15px;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #000 transparent transparent transparent;
  }

  #pink {
    background: #FFCAD7;
  }

  #gray {
    background: #E2D4FF;
  }

  #yellow {
    background: #FDD469;
  }

  #green {
    background: #9FF8AD;
  }
}

.selectedColor {
  box-shadow: 0 0 0px 2px #eee;
}


</style>
