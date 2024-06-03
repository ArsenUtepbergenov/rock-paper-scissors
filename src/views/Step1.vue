<template>
  <section class="step1">
    <Shape variant="paper" class="paper" @select="handleSelect" />
    <Shape variant="scissors" class="scissors" @select="handleSelect" />
    <Shape variant="rock" class="rock" @select="handleSelect" />
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import Shape from '../components/Shape.vue'
import { useGameStore } from '../stores/root.js'
import { useRouter } from 'vue-router'

const store = useGameStore()
const router = useRouter()

function handleSelect(variant) {
  store.setUserVariant(variant)
  router.push({ name: 'Step2' })
}

onMounted(() => {
  store.$reset()
})
</script>

<style lang="css" scoped>
.step1 {
  background: url('/images/bg-triangle.svg') no-repeat center;
  position: relative;
  width: 314px;
  height: 278px;
  margin: auto;
}

.step1 .paper {
  position: absolute;
  left: -30px;
  top: -40px;
}

.step1 .scissors {
  position: absolute;
  right: -30px;
  top: -40px;
}

.step1 .rock {
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
}
</style>
