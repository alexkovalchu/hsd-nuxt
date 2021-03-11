<template>
  <header class="bg-white shadow-md">
    <div class="flex justify-between items-center md:px-24 md:py-3">
      <a class="font-bold logo" href=""><img class="inline-block md:mr-3" src="~/assets/images/logo.svg" alt="">HSD</a>
      <div class="flex items-center">
        <slot></slot>
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
</style>
