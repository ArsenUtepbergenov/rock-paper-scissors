import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getRandomByRange } from '../utils/math'
import LocalStorage from '../utils/localStorage'

const variants = ['paper', 'rock', 'scissors']
const storage = new LocalStorage()

const vb = {
  paper: ['scissors'],
  rock: ['paper'],
  scissors: ['rock'],
}

function canPcBeat(v1, v2) {
  return vb[v1].includes(v2)
}

export const useGameStore = defineStore('gameStore', () => {
  const userVariant = ref('')
  const pcVariant = ref('')
  const winner = ref('')
  const score = ref(storage.get() || 0)

  function addScore() {
    score.value++
    storage.save(score.value)
  }

  function setUserVariant(value) {
    userVariant.value = value
  }

  function setPcVariant() {
    let i = 0
    let temp = ''

    while (true) {
      i = getRandomByRange(0, 2)
      temp = variants[i]

      if (temp !== userVariant.value) break
    }

    pcVariant.value = temp
  }

  function $reset() {
    userVariant.value = ''
    pcVariant.value = ''
    winner.value = ''
  }

  function check() {
    if (userVariant.value === '' || pcVariant.value === '') {
      winner.value = ''
      return
    }

    if (canPcBeat(userVariant.value, pcVariant.value)) {
      winner.value = 'pc'
    } else {
      winner.value = 'user'
      addScore()
    }
  }

  const pcSelected = computed(() => pcVariant.value !== '')

  return {
    score,
    userVariant,
    pcVariant,
    pcSelected,
    winner,
    setUserVariant,
    setPcVariant,
    check,
    $reset,
  }
})
