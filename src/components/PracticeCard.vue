<!-- PracticeCard -->

<script setup>
  import { ref, toRefs, watch, computed, onMounted, onUnmounted } from 'vue'
  import { useStorage } from '@vueuse/core'
  import { useStorageName } from '@/composables/storage_name'

  const sn = useStorageName ( 'practice_card' )

  const props = defineProps ({
    // card details
    card: {
      type: Object,
      required: true,
      validation: value => 
        value.question?.length
        && value.answer.length >= 0,
    },
    // user has answered
    answered: {
      type: Boolean,
      required: false,
    },
    // invalidated by timeout, etc.
    invalidated: {
      type: Boolean,
      required: false,
    },
  })

  const { card, answered, invalidated } = toRefs ( props )

  const emit = defineEmits ([
    'rated',
  ])
  
  const rating = useStorage ( sn.get_name ( `rating` ), -1 )
  watch ( rating, () => emit ( 'rated', rating.value ) )

  const reset = () => {
    rating.value = -1
    
    good_icon.value = get_random_item ( good_icons_list )
    medium_icon.value = get_random_item ( medium_icons_list )
    bad_icon.value = get_random_item ( bad_icons_list )
    
  }

  const show_answer = computed ( () => answered.value || invalidated.value )

  const invalidate = () => {
    rating.value = 0
  }

  watch ( card, reset )
  watch ( invalidated, invalidate )

  const get_random_item = list => list [ Math.floor ( Math.random () * list.length ) ]

  const good_icons_list = '😃,🤩,🧐,🤓,😎,😄,😁,👽,🤠'.split(',')
  const medium_icons_list = '😒,🙄,🤖,🤨,🤔,😶,😐,😬,🥱'.split(',')
  const bad_icons_list = '😞,😰,🥴,😵,😭,😝,🤥,☠️,💩'.split(',')

  const good_icon = ref ( get_random_item ( good_icons_list ) )
  const medium_icon = ref ( get_random_item ( medium_icons_list ) )
  const bad_icon = ref ( get_random_item ( bad_icons_list ) )

  const good_phrases = [`🎉 Celebrate !! 🎊`, `🎸 You Rock !! 🎤`, `🥊 Knock Out !! 🥋`, `🏆 Great Job !! 🥇`, `🎯 On Target !! 💯`, `🌟 Shine On !! ✨`] //💪🙌🎶
  const medium_phrases = [`💙 Keep trying your best!`, `✌️ Good enough!`, `🪁 Still fine!`] //
  const bad_phrases = [`💔 Don't give up`, `🧯 You'll get it on the next one`, `🚽 Keep working hard`, `☔️ You can do this, keep at it`, `💥 Make it a learning lesson`, `🥀 Don't lose courage`] //

  const keyboard_rating_listener = ev => {
    if ( invalidated.value ) return

    const key_num = parseInt ( ev.key )
    if ( key_num > 0 && key_num <= 3 )
      // key 1 => rating 2
      // key 2 => rating 1
      // key 3 => rating 0
      rating.value = Math.abs ( key_num - 3 )
  }

  onMounted ( () => {
    window.addEventListener ( 'keydown', keyboard_rating_listener )
  })

  onUnmounted ( () => {
    window.removeEventListener ( 'keydown', keyboard_rating_listener )
  })

  const classes = ['flip', 'flip_v', 'grow', 'fade']
</script>

<template>
  <div class="practice_card">

    <div class="question_text"
      :class="{
        answered: show_answer,
      }"
      v-html="card.question">
    </div>

    <template v-if="show_answer">
      <div class="answer_text"
        v-html="card.answer">
      </div>

      <div class="rating_message"
        >
        <Transition appear :name="get_random_item ( classes )" mode="out-in">
          <span v-if="rating === 2" class="good">{{ get_random_item ( good_phrases ) }}</span>
          <span v-else-if="rating === 1" class="medium">{{ get_random_item ( medium_phrases ) }}</span>
          <span v-else-if="rating === 0" class="bad">{{ get_random_item ( bad_phrases ) }}</span>
        </Transition>
      </div>

      <div class="rating_buttons">
        <button
          class="rating_button good"
          :class="{
            on: rating === 2,
            dim: ![ -1, 2 ].includes ( rating )
          }"
          :disabled="invalidated"
          @click="rating = 2"
          >{{ good_icon }}
        </button>
        <button
          class="rating_button medium"
          :class="{
            on: rating === 1,
            dim: ![ -1, 1 ].includes ( rating )
          }"
          :disabled="invalidated"
          @click="rating = 1"
          >{{ medium_icon }}
        </button>
        <button
          class="rating_button bad"
          :class="{
            on: rating === 0,
            dim: ![ -1, 0 ].includes ( rating )
          }"
          @click="rating = 0"
          >{{ bad_icon }}
        </button>
      </div>
    </template>
    
  </div>
</template>

<style>
  .practice_card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    border-radius: 0;
    border: none;
  }
  .practice_card > * {
    margin: var(--gap-s) 0;
  }
  .practice_card pre {
    color: burlywood;
  }

  .rating_buttons {
    display: flex;
    justify-content: space-around;
    margin: var(--gap-m) 0;
  }

  .rating_button {
    padding: var(--gap-s);
    font-size: var(--gap-l);
    border-radius: 100%;
    cursor: pointer;
  }

  .rating_button.good.on,
  .rating_button.good:hover {
    background: seagreen;
  }
  .rating_button.good:active {
    background: springgreen;
    transition: background .3s ease;
  }
  .rating_button.medium.on,
  .rating_button.medium:hover {
    background: goldenrod;
  }
  .rating_button.medium:active {
    background: yellow;
    transition: background .3s ease;
  }
  .rating_button.bad.on,
  .rating_button.bad:hover {
    background: crimson;
  }
  .rating_button.bad:active {
    background: red;
    transition: background .3s ease;
  }
  .rating_button.dim {
    opacity: .5;
  }

  .rating_message {
    display: flex;
    justify-content: center;
    margin-top: var(--gap-m);
    text-align: center;
  }
  
  .rating_message .good {
    color: white;
    font-size: 3rem;
  }
  .rating_message .medium {
    font-size: 2rem;
  }
  .rating_message .bad {
    font-size: 1.5rem;
    /* opacity: .8; */
  }
  
  .question_text,
  .answer_text {
    font-size: 1.5rem;
    transition: all .5s ease;
  }

  .question_text.answered {
    opacity: .5;
  }

  .answer_text {
    height: 100%;
  }
  
  .answer_text pre {
    text-wrap: wrap;
    white-space: break-spaces;
  }

  .fade-enter-active,
  .fade-leave-active,
  .grow-enter-active,
  .grow-leave-active,
  .flip-enter-active,
  .flip-leave-active,
  .flip_v-enter-active,
  .flip_v-leave-active {
    transition: all .3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .grow-enter-from,
  .grow-leave-to {
    transform: scale( 0 );
  }
  .flip-enter-from,
  .flip-leave-to {
    transform: scaleX( 0 );
  }
  .flip_v-enter-from,
  .flip_v-leave-to {
    transform: rotateX( 270deg );
  }

  @keyframes flash {
    0% {
      opacity: 0;
    }
    25% {
      opacity: .5;
    }
    50% {
      opacity: .25;
    }
    25% {
      opacity: 1;
    }
  }

  @media (min-width: 500px) {
    .practice_card {
      border: 1px solid #444;
      border-radius: var(--gap-s);
      padding: var(--gap-m);
    }
  }

  @media (min-width: 1100px) {
    .practice_card {
      padding: var(--gap-l);
    }

    .practice_card > * {
      margin: var(--gap-s) 0;
    }

    .rating_buttons {
      margin: var(--gap-m) 0;
    }
  }
</style>