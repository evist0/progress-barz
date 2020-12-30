<template>
  <div id="app">
    <ProgressBar color="white" :value="current" :max-value="max"/>
    <Block color="red"></Block>
    <Block color="green"></Block>
    <Block color="blue"></Block>
  </div>
</template>

<script>
import Block from "@/components/Block";
import ProgressBar from "@/components/ProgressBar";

export default {
  name: 'App',
  components: {
    ProgressBar,
    Block
  },
  data() {
    return {
      current: 0,
      max: 0
    }
  },
  mounted() {
    this.max = document.body.scrollHeight - document.documentElement.clientHeight;
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.current = window.pageYOffset;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
