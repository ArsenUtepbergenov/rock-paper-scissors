<template>
  <header>
    <div class="container">
      <div class="box">
        <img class="logo" src="/images/logo.svg" alt="Logo" />
        <div class="score">
          <span class="text semibold">Score</span>
          <span class="value bold">{{ store.score }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useGameStore } from '../stores/root.js'

const store = useGameStore()
</script>
