<template>
  <div :style="{backgroundColor: this.color}">
  </div>
</template>

<script>
export default {
  name: "Block",
  props: {
    color: String,
  },
}
</script>

<style scoped>
div {
  height: 100vh;
  width: 100%;
}
</style>
