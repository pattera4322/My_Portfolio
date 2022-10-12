<script setup>
import { ref, computed } from 'vue'
const prop = defineProps({
  yourText: {
    type: String,
    require: true
  }
})
console.log(prop.yourText)

</script>

<template>
  <!-- <button class="button-color">{{ buttonText }}</button> -->
  <button class="button-color">{{ yourText }}</button>
</template>

<style>

</style>