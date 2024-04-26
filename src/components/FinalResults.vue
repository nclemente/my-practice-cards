<!-- FinalResults -->

<script setup>
  import { computed, toRefs } from 'vue'

  const props = defineProps ({
    results: {
      type: Array,
      required: true,
      validation: value => value.length,
    },
  })

  const { results } = toRefs ( props )

  const emit = defineEmits ([
    'review',
    'restart',
  ])

  const right = computed ( () => results.value.filter ( answer => answer === 2 ).length )
  const medium = computed ( () => results.value.filter ( answer => answer === 1 ).length )
  const wrong = computed ( () => results.value.filter ( answer => answer === 0 ).length )
  const unanswered = computed ( () => results.value.filter ( answer => answer === -1 ).length )
  const score = computed (() => Math.round ( right.value / results.value.length * 100 ))

  const has_cards_for_review = computed ( () => results.value.filter ( answer => answer < 2 ).length )

  const do_review = () => {
    emit ( 'review' )
  }
  const do_restart = () => {
    emit ( 'restart' )
  }
</script>

<template>
  <div class="results_panel">
    <h1>Your Resuslts</h1>
    <h2>Final Score: {{ score }}%</h2>
    <h1 v-if="score === 100">
      WOW !!!!!!!
    </h1>
    <h1 v-if="score > 85">
      You've got this!!
      😃🎉
    </h1>
    <div class="resulst_grid">
      <div>Right:</div>
      <div>{{ right }}</div>

      <div>Medium:</div>
      <div>{{ medium }}</div>

      <div>Wrong:</div>
      <div>{{ wrong }}</div>

      <div>Unanswered:</div>
      <div>{{ unanswered }}</div>
    </div>

    <div
      v-if="has_cards_for_review"
      class="restart_msg"
      >
      <h3>Do you want to review the wrong and unanswered cards?</h3>
      <div class="review_buttons_wrapper">
        <button class="review_btn yes"
          @click="do_review">
          Yes, let's review them
        </button>  
        <button class="review_btn no"
          @click="do_restart">
          No, I want to restart all over
        </button>
      </div>
    </div>

  </div>
</template>

<style>
  .results_panel {
    border: 1px solid steelblue;
    border-radius: 1rem;
    padding: 3rem;
    background: #222;
  }

  .resulst_grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .result_row {
    display: flex;
  }

  .restart_msg {
    margin-top: 3rem;
  }
  .restart_msg h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .review_buttons_wrapper {
    display: flex;
    justify-content: space-between;
  }

  .review_btn {
    font-weight: bold;
  }
  .review_btn.yes {
    margin-right: 1rem;
  }
  .review_btn.yes:hover {
    background: seagreen;
  }
  .review_btn.no {
    margin-left: 1rem;
  }
  .review_btn.no:hover {
    background: crimson;
  }
</style>