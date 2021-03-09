<template>
  <header class="bg-white shadow-sm">
    <div class="flex justify-between items-center md:px-24 md:py-6">
      <a class="font-bold logo" href="">HSD</a>
      <div class="flex items-center">
        <img id="notification" src="~/assets/images/notification-icon.svg" alt="">
        <img id="profile" src="~/assets/images/profile.svg" alt="">
        <button>write</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
header > div #notification {
  width: 20px;
  height: 20px;
}

header > div #profile {
  width: 34px;
  height: 34px;
  margin-left: 20px;
}

header > div button {
  margin-left: 30px;
  padding: 10px 16px;
  text-transform: uppercase;
  background: #101010;
  color: white;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
</style>
