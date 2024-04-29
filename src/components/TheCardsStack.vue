<!-- TheCardsStack -->

<script setup>
  import FinalResults from './FinalResults.vue'
  import PracticeCard from './PracticeCard.vue'
  import UserAnswer from './UserAnswer.vue'
  import CardTimer from './CardTimer.vue'

  import { ref, computed } from 'vue'
  import { useCards } from '@/composables/cards'

  const cards = useCards ()
  
  const init_user_ratings = () => new Array ( cards.all_cards.length ).fill ().map ( () => -1 )
  
  const cards_list = ref ( cards.all_cards )
  cards.shuffle_cards ( cards_list.value )
  const user_ratings = ref ( init_user_ratings () )
  const show_results = ref ( false )

  const card_num = ref ( 0 )
  const card_answered = ref ( false )

  const is_first_card = computed ( () => card_num.value <= 0 )
  const is_last_card = computed ( () => card_num.value >= cards_list.value.length - 1 )

  const card_submitted = rating => {
    card_answered.value = true
    timer_el.value.stop ()
  }
  const card_rated = rating => {
    console.log('card_rated', rating)
    user_ratings.value [ card_num.value ] = rating
  }

  const good_stack = computed ( () => cards_list.value.filter ( (card, i) => user_ratings.value [i] === 2 ) )
  const medium_stack = computed ( () => cards_list.value.filter ( (card, i) => user_ratings.value [i] === 1 ) )
  const bad_stack = computed ( () => cards_list.value.filter ( (card, i) => user_ratings.value [i] === 0 ) )
  const unrated_stack = computed ( () => cards_list.value.filter ( (card, i) => user_ratings.value [i] === -1 ) )

  const to_next_card = () => {
    if ( !is_last_card.value ) {
      card_num.value++
      card_answered.value = false
    }
    reset_timer ()
  } 
  const practice_done = () => {
    show_results.value = true
  }

  const reset = () => {
    cards.shuffle_cards ( cards_list.value )
    user_ratings.value = init_user_ratings ()

    card_num.value = 0
    card_answered.value = false
    show_results.value = false

    reset_timer ()
  }
  
  const review_stacks = () => {
    cards_list.value = [
      ...medium_stack.value,
      ...bad_stack.value,
      ...unrated_stack.value,
    ]
    reset ()
  }

  const restart_all_cards = () => {
    cards_list.value = cards.all_cards
    reset ()
  }


  const timer_el = ref ()
  const has_time = ref ( true )
  const time_up = () => {
    has_time.value = false
  }
  const reset_timer = () => {
    has_time.value = true
    timer_el.value.reset ()
  }
</script>

<template>

  <div class="progress_panel">
    <span>Card <b>{{ card_num + 1 }}</b> of {{ cards_list.length }}</span>
    <CardTimer ref="timer_el" @time:up="time_up" />
    <!-- Good: {{ good_stack.length }}
    Med: {{ medium_stack.length }}
    Bad: {{ bad_stack.length }}
    Unrated: {{ unrated_stack.length }} -->
  </div>

  <Transition name="results">
    <FinalResults
      v-if="show_results"
      class="practice_results"
      :results="user_ratings"
      @review="review_stacks"
      @restart="restart_all_cards"
      />
  </Transition>

  <div class="card_wrapper">
    <PracticeCard
      :card="cards_list [ card_num ]"
      :answered="card_answered"
      :invalidated="!has_time"
      @rated="card_rated"
      />
    <UserAnswer
      :current_card_num="card_num"
      :invalidated="!has_time"
      @submitted="card_submitted"
      />
  </div>
  
  <div class="buttons">
    <button
      v-if="!is_last_card"
      class="button_next"
      @click.prevent="to_next_card"
      >Next Card &gt;
    </button>
    <!-- :disabled="!card_answered" -->
    <button v-else
      class="button_next button_finish"
      @click="practice_done"
      >
      Finish
    </button>
  </div>

</template>

<style>
  .card_wrapper {
    display: grid;
    grid-template-columns: 1fr;
    margin: var(--gap-m) 0;
    min-height: 60vh;
    width: 80vw;
    max-width: 80vw;
  }

  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  button {
    background: #444;
    border: none;
    border-radius: 2rem;
    padding: 1rem 2rem;
    transition: background .3s ease;
    font-size: 1rem;
    cursor: pointer;
  }
  button:hover {
    background: steelblue;
  }
  button:active {
    background: royalblue;
  }

  /* button.button_prev {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    grid-column: 1;
  } */
  button.button_next {
    /* border-top-left-radius: 0;
    border-bottom-left-radius: 0; */
    grid-column: 2;
    min-width: 20vw;
  }
  button.button_finish:hover {
    background: violet;
    font-weight: bold;
  }

  .progress_panel {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
 
 @media (min-width: 920px) {
   .card_wrapper {
     grid-template-columns: 4fr 3fr;
     column-gap: var(--gap-m);
   }
 }
</style>