<template>
  <footer>
    <div class="container">
      <button @click="handleOpenRules" type="button" class="btn semibold">
        Rules
      </button>
    </div>
    <Teleport to="body">
      <div v-if="openedRulesModal" class="overlay"></div>
      <rules-modal v-if="openedRulesModal" @close="handleCloseRules" />
    </Teleport>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

import RulesModal from './RulesModal.vue'

const openedRulesModal = ref(false)

function handleOpenRules() {
  openedRulesModal.value = true
}

function handleCloseRules() {
  openedRulesModal.value = false
}
</script>

<style lang="css">
@media screen and (min-width: 1366px) {
  .overlay {
    position: fixed;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    top: 0;
  }
}
</style>
