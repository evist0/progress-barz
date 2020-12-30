<template>
  <div :style="{
        position: 'fixed',
        width: '100%',
        height: '5px',
      }">
    <div :style="{
        height: '5px',
        width: Math.trunc(this.value / this.maxValue * 100) + '%',
        backgroundColor: this.color,
        transition: 'width 200ms ease-in-out'
      }">
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    color: String,
    value: Number,
    maxValue: Number
  },
}
</script>
