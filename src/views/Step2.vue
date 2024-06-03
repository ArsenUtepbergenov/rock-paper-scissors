<template>
  <section class="container step2">
    <div class="user-picked">
      <Shape :variant="store.userVariant" />
      <h2>You picked</h2>
    </div>
    <div class="pc-potential-picked">
      <div v-if="store.pcSelected">
        <Shape :variant="store.pcVariant" />
      </div>
      <div v-else class="skeleton"></div>
      <h2>The house picked</h2>
    </div>
  </section>
  <section v-if="store.winner" class="container result">
    <h1 class="result-text bold">
      {{ `You ${userWin ? 'win' : 'lose'}` }}
    </h1>
    <button
      @click="handlePlayAgain"
      type="button"
      class="btn btn-secondary semibold"
    >
      Play again
    </button>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import Shape from '../components/Shape.vue'
import { useGameStore } from '../stores/root.js'
import { useRouter } from 'vue-router'

const store = useGameStore()
const router = useRouter()

const userWin = ref(false)

setTimeout(() => {
  store.setPcVariant()
}, 1000)

setTimeout(() => {
  store.check()
}, 2000)

function handlePlayAgain() {
  router.push({ name: 'Step1' })
}

watch(
  () => store.winner,
  (value) => {
    if (value === 'user') userWin.value = true
    else userWin.value = false
  },
)
</script>

<style lang="css">
.result {
  margin-top: 70px;
}

.result .result-text {
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: 30px;
  text-align: center;
}

.step2 {
  display: flex;
  justify-content: space-between;
}

.step2 .user-picked,
.step2 .pc-potential-picked {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step2 .pc-potential-picked .skeleton {
  width: 150px;
  height: 150px;
  opacity: 0.8;
  background: hsl(226.36deg 47.83% 18.04%);
  border-radius: 50%;
}

@media screen and (min-width: 1366px) {
  .result {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .step2 .pc-potential-picked .skeleton {
    width: 250px;
    height: 250px;
  }
}
</style>
