<!-- FinalResults -->

<script setup>
  import { ref, computed, toRefs, onMounted } from 'vue'

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


  const results_panel = ref()
  const loaded = ref(false)
  onMounted(()=>{
    setTimeout(() => {
      loaded.value = true
    }, 500);
  })
</script>

<template>
  <Transition appear name="results">
  <div class="results_panel_wrapper modal_wrapper">
    <!-- v-if="loaded" -->
    <div class="results_panel modal" ref="results_panel"
      :class="{}">
      <h1>Your Results</h1>
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

      <div class="review_buttons_wrapper">
        <button class="review_btn"
          v-if="has_cards_for_review"
          @click="do_review">
          Re-do failed cards
        </button>  
        <button class="review_btn"
          @click="do_restart">
          Restart
        </button>
      </div>

    </div>
  </div>
</Transition>
</template>

<style>
  .resulst_grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .result_row {
    display: flex;
  }

  .review_buttons_wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }

  .review_btn {
    font-weight: bold;
  }
  .review_btn:first-child {
    margin-right: 1rem;
  }
  .review_btn:last-child {
    margin-left: 1rem;
  }

  .results-enter-active,
  .results-leave-active {
    transition: all .2s ease;
  }
  .results-enter-from,
  .results-leave-to {
    opacity: 0;
    transform: scaleY ( 0 );
  }

  .results-enter-active .results_panel,
  .results-leave-active .results_panel {
    transition: all 1s ease;
    /* transition-delay: .2s; */
  }
  .results-enter-from .results_panel,
  .results-leave-to .results_panel {
    opacity: 0;
    transform: scale( 0 ) rotateY( 360deg ) translateY( 300% );
  }
</style>