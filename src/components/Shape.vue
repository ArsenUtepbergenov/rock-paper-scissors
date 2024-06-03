<template>
  <div class="shape" @click="select">
    <img :src="srcImg" :alt="props.variant" class="icon" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const colors = {
  paper: 'hsl(230, 89%, 62%)',
  rock: 'hsl(349, 71%, 52%)',
  scissors: 'hsl(39, 89%, 49%)',
}

const props = defineProps({
  variant: {
    type: String,
    default: 'paper',
    validator: (prop) => ['paper', 'rock', 'scissors'].includes(prop),
  },
})

const srcImg = computed(() => `/images/icon-${props.variant}.svg`)
const color = computed(() => colors[props.variant])

const emit = defineEmits(['select'])

function select() {
  emit('select', props.variant)
}
</script>

<style lang="css">
.shape {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(closest-side, white 79%, v-bind(color) 80% 100%);
  display: flex;
  cursor: pointer;
}

.shape .icon {
  margin: auto;
}
</style>
