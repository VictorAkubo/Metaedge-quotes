<script setup>
  import {ref} from "vue"
  import Header from "../components/Header.vue"
  import Main from "../components/Main.vue"
  import Footer from "@/components/Footer.vue"
</script>
<template>
  <div>
      <Header/>
  <Main/>
  <Footer/>
  </div>

</template>
<style scoped>
  div{
  width:100%;
  background: #0d0d0d;
  }
  
@media (min-width: 1024px) {
  
}
</style>
