<template>
  <footer>
    <div class="flex justify-between items-center">
      <ul class="flex items-center list-none">
        <li><a href="">Account</a></li>
        <li><a href="">About</a></li>
      </ul>
      <a class="font-bold logo" href="">HSD</a>
      <ul class="flex items-center list-none">
        <li><a href="">Help</a></li>
        <li><a href="">Privacy</a></li>
      </ul>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background: #101010;
  color: white;
}

footer > div {
  padding: 20px 100px;
}

footer ul li a {
  font-size: 16px;
}

footer ul li:nth-child(2) {
  margin-left: 40px;
}
</style>