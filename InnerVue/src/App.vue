<script setup>
  import {ref} from "vue"
</script>
<template>
  <div>
    <router-view />
  </div>

</template>
<style scoped>
  div {
  width: 100%;
  min-height: 100vh; /* This ensures the black background always fills the screen */
  background: #0d0d0d;
}
</style>
