<script setup>
import { ref } from "vue"
const title = "Victor Paul"
</script>

<template>
  <header>
    <div class="logo-wrap">
      <span class="logo-symbol">❝</span>
      <div class="logo-text">
        <h1 class="brand">MEQ</h1>
        <span class="tagline">quotes</span>
      </div>
    </div>
    <nav class="nav">
     <router-link to="/submit">
          Submit a Quote
     </router-link>
    </nav> </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap');

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 72px;
  border-bottom: 1px solid rgba(180, 145, 80, 0.15);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
}

/* ── Logo ── */
.logo-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;
}

.logo-symbol {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 34px;
  line-height: 1;
  color: #b49150;
  opacity: 0.85;
  position: relative;
  top: 2px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 1px;
}

.brand {
  font-family: 'Cinzel', serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: #e8e0d0;
  margin: 0;
}

.tagline {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 11px;
  letter-spacing: 0.18em;
  color: #b49150;
  text-transform: lowercase;
}

/* ── Nav ── */
.nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav a {
  font-family: 'Cinzel', serif;
  font-size: 10.5px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(232, 224, 208, 0.5);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav a:hover {
  color: #b49150;
}

.nav-cta {
  padding: 7px 18px !important;
  border: 1px solid rgba(180, 145, 80, 0.4) !important;
  color: #b49150 !important;
  transition: all 0.2s ease !important;
}

.nav-cta:hover {
  background: rgba(180, 145, 80, 0.08) !important;
  border-color: #b49150 !important;
  color: #c9a96e !important;
}
</style>