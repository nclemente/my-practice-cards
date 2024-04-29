<!-- TheWelcome -->

<script setup>
  import { computed } from 'vue'
  
  const props = defineProps ( {
    starting: {
      type: Boolean,
    }
  })
  
  defineEmits ( [
    'start', 
    'continue', 
  ] )

  const start_button_text = computed ( () => props.starting ? 'Start' : 'Restart' )
</script>

<template>
  <div class="welcome_panel_wrapper modal_wrapper">
    <div class="welcome_panel modal">
      <h1>Welcome to<br /><strong>Moji 😎 Flash 🤩 Cards</strong></h1>
      <button
        v-if="!starting"
        @click="$emit('continue')"
      >Continue where I left</button>
      <button
        @click="$emit('start')"
      >{{ start_button_text }}</button>
    </div>
  </div>
</template>

<style>
  .welcome_panel_wrapper {
    background-color: #111;
  }
  .welcome_panel {
    text-align: center;
  }
  .welcome_panel > * {
    margin: 1rem;
  }
</style>