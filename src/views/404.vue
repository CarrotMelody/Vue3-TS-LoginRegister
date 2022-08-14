<template>
  <div class="not-found">
    <img src="@/assets/404-1.jpg" alt="Page not found" />
  </div>
</template>
<script>
export default {
  name: "404",
  components: {},
};
</script>
<style scoped>
.not-found {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.not-found img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>