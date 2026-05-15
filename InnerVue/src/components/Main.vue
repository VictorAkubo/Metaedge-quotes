<script setup>
import { ref } from "vue"
const main = ref("hello how are you doing today and thank you")
const author = "victor"

const getQuote = async ()=>{
  const res = await fetch("http://localhost:5000")
  const data = res.json()
  main.value = data[0].quote
}
</script>

<template>
  <div class="scene">
    <div class="card">
      <span class="deco-line top" />
      <div class="quote-mark">"</div>
      <p class="quote-text">{{ main }}</p>
      <div class="divider" />
      <span class="author">— {{ author }}</span>
      <span class="deco-line bottom" />
    </div>

    <button @click="getQuote" class="gen-btn">
      <span class="btn-icon">✦</span>
      Random Quote
    </button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cinzel:wght@400;500&display=swap');

.scene {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background: #0d0d0d;
  background-image:
    radial-gradient(ellipse at 20% 50%, rgba(180, 145, 80, 0.06) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 50%, rgba(180, 145, 80, 0.04) 0%, transparent 60%);
}

.card {
  position: relative;
  max-width: 510px;
  width: 70%;
  padding: 56px 52px 48px;
  background: #111;
  border: 1px solid rgba(180, 145, 80, 0.25);
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.03),
    0 32px 64px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(180, 145, 80, 0.1);
  text-align: center;
  animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.deco-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #b49150, transparent);
}
.deco-line.top  { top: -1px; }
.deco-line.bottom { bottom: -1px; }

.quote-mark {
  font-family: 'Cormorant Garamond', serif;
  font-size: 96px;
  line-height: 0.6;
  color: rgba(180, 145, 80, 0.35);
  margin-bottom: 20px;
  font-style: italic;
  user-select: none;
}

.quote-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 300;
  font-style: italic;
  color: #e8e0d0;
  line-height: 1.75;
  letter-spacing: 0.01em;
  margin: 0 0 28px;
}

.divider {
  width: 48px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #b49150 50%, transparent);
  margin: 0 auto 20px;
}

.author {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #b49150;
}

/* ── Button ── */
.gen-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: transparent;
  border: 1px solid rgba(180, 145, 80, 0.35);
  color: #b49150;
  font-family: 'Cinzel', serif;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;
  animation: fadeUp 1s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.gen-btn:hover {
  background: rgba(180, 145, 80, 0.08);
  border-color: #b49150;
  color: #c9a96e;
  box-shadow: 0 0 20px rgba(180, 145, 80, 0.1);
}

.btn-icon {
  font-size: 10px;
  opacity: 0.7;
  transition: transform 0.4s ease;
}

.gen-btn:hover .btn-icon {
  transform: rotate(90deg);
  opacity: 1;
}
</style>