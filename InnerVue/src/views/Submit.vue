<script setup>
import { ref } from "vue"
import Navbar from "../components/Header.vue"
const quote = ref("")
const authorName = ref("")
const loading = ref(false)

const handleSubmit = async() => {
  console.log("clicked") 
  loading.value = true
try {
  if (quote.value !== "" && authorName.value !== "") {
    const res = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ quote: quote.value, name: authorName.value })
    });
    alert("🔔 submitted thank you for your wisdom")
    loading.value = false
    
    if (!res.ok) {
      loading.value = false
      alert("✖️ failed to submit")
      throw new Error(`Server responded with status: ${res.status}`);
    }
    
    console.log("Submitted:", { quote: quote.value, name: authorName.value });
    
  } else {
    alert("Please fill all fields *Quote and AuthorName*");
  }
} catch (error) {
  console.error("Submission failed:", error);
}

}
</script>

<template>
  <Navbar route="/" routeName="Home"/>
  <div class="scene">
    <div class="card">
      <span class="deco-line top" />
      <div class="quote-mark">"</div>
      
      <form @submit.prevent="handleSubmit" class="submit-form">
        <!-- Quote Input -->
        <textarea 
          v-model="quote" 
          placeholder="Share your wisdom..."
          class="quote-input"
          rows="3"
        ></textarea>
        
        <div class="divider" />
        
        <!-- Author Input -->
        <div class="author-wrapper">
          <span class="prefix">—</span>
          <input 
            v-model="authorName" 
            type="text" 
            placeholder="AUTHOR NAME"
            class="name-input"
          />
        </div>

        <button type="submit" class="gen-btn" :disabled="loading">
          <span class="btn-icon">✦</span>
           {{ loading ? "Submitting..." : "Publish Quote" }}
        </button>
      </form>
      
      <span class="deco-line bottom" />
    </div>
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
  background: #0d0d0d;
  background-image:
    radial-gradient(ellipse at 20% 50%, rgba(180, 145, 80, 0.06) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 50%, rgba(180, 145, 80, 0.04) 0%, transparent 60%);
}

.card {
  position: relative;
  max-width: 510px;
  width: 90%;
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

.submit-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ── Inputs ── */
.quote-input {
  width: 100%;
  background: transparent;
  border: none;
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 300;
  font-style: italic;
  color: #e8e0d0;
  line-height: 1.75;
  text-align: center;
  resize: none;
  margin-bottom: 20px;
  outline: none;
}

.quote-input::placeholder {
  color: rgba(232, 224, 208, 0.2);
}

.author-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
}

.prefix {
  color: #b49150;
  font-family: 'Cinzel', serif;
  font-size: 11px;
}

.name-input {
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #b49150;
  outline: none;
  width: 150px;
  transition: border-color 0.3s ease;
}

.name-input:focus {
  border-bottom: 1px solid rgba(180, 145, 80, 0.4);
}

.name-input::placeholder {
  color: rgba(180, 145, 80, 0.3);
}

/* ── Decorative Elements ── */
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
  font-size: 80px;
  line-height: 0.6;
  color: rgba(180, 145, 80, 0.35);
  margin-bottom: 10px;
  font-style: italic;
  user-select: none;
}

.divider {
  width: 48px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #b49150 50%, transparent);
  margin-bottom: 20px;
}

/* ── Button ── */
.gen-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background: transparent;
  border: 1px solid rgba(180, 145, 80, 0.35);
  color: #b49150;
  font-family: 'Cinzel', serif;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;
}

.gen-btn:hover {
  background: rgba(180, 145, 80, 0.08);
  border-color: #b49150;
  color: #c9a96e;
  box-shadow: 0 0 20px rgba(180, 145, 80, 0.1);
}

.btn-icon {
  font-size: 10px;
  transition: transform 0.4s ease;
}

.gen-btn:hover .btn-icon {
  transform: rotate(90deg);
}
</style>