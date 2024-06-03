<template>
  <section class="rules-modal">
    <div class="content">
      <h1 class="heading">Rules</h1>
      <img src="/images/image-rules.svg" alt="Rules" class="rules-img" />
      <img
        @click="handleCloseRules"
        class="close"
        src="/images/icon-close.svg"
        alt="Close rules"
      />
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(['close'])

function handleCloseRules() {
  emit('close')
}
</script>
