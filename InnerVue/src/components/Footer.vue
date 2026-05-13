<script setup>
import { ref } from "vue"
import { Icon } from "@iconify/vue"

const year = ref("2025")
</script>

<template>
  <footer>
    <div class="footer-inner">

      <div class="footer-brand">
        <span class="logo-symbol">❝</span>
        <span class="logo-name">MEQ <em>quotes</em></span>
      </div>

      <p class="footer-tagline">Words that stay with you.</p>

      <div class="social-row">
        <span class="social-label">Find us on</span>
        <a href="https://vm.tiktok.com/ZS9FdrK7D5GCd-1FI0b/" target="_blank" class="social-link" aria-label="TikTok">
          <Icon icon="simple-icons:tiktok" height="18" />
        </a>
       <!-- <a href="#" class="social-link" aria-label="Instagram">
          <Icon icon="mdi:instagram" height="18" />
        </a>
        -->
      </div>

      <div class="footer-divider" />

      <p class="footer-copy">© {{ year }} MEQ Quotes. All rights reserved.</p>

    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap');

footer {
  background: #0d0d0d;
  border-top: 1px solid rgba(180, 145, 80, 0.15);
  padding: 48px 24px 32px;
}

.footer-inner {
  max-width: 560px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

/* ── Brand ── */
.footer-brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-symbol {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 28px;
  color: #b49150;
  opacity: 0.8;
  line-height: 1;
  position: relative;
  top: 2px;
}

.logo-name {
  font-family: 'Cinzel', serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: #e8e0d0;
}

.logo-name em {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 300;
  font-size: 13px;
  letter-spacing: 0.15em;
  color: #b49150;
  margin-left: 4px;
}


.footer-tagline {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 14px;
  color: rgba(232, 224, 208, 0.35);
  letter-spacing: 0.05em;
  margin: 0;
}

.social-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 4px;
}

.social-label {
  font-family: 'Cinzel', serif;
  font-size: 9.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(180, 145, 80, 0.5);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(180, 145, 80, 0.2);
  color: rgba(232, 224, 208, 0.5);
  transition: all 0.25s ease;
  text-decoration: none;
}

.social-link:hover {
  border-color: #b49150;
  color: #b49150;
  background: rgba(180, 145, 80, 0.07);
}

/* ── Divider ── */
.footer-divider {
  width: 48px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #b49150 50%, transparent);
  margin: 4px 0;
}

/* ── Copyright ── */
.footer-copy {
  font-family: 'Cinzel', serif;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(232, 224, 208, 0.2);
  margin: 0;
}
</style>