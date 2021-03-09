<template>
    <header class="bg-white shadow-md fixed">
      <div class="flex justify-between items-center">
        <a class="font-bold logo" href="">HSD</a>
        <div class="flex items-center">
          <img id="notification" src="~/assets/images/notification-icon.svg" alt="">
          <img id="profile" src="~/assets/images/profile.svg" alt="">
          <button>write</button>
        </div>
      </div>
    </header>
</template>
<style scoped>
header {
  top: 0;
  width: 100vw;
}
header > div {
  padding: 20px 100px;
}

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