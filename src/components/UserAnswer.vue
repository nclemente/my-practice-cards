<!-- UserAnswer -->

<script setup>
  import { ref, computed, watch, onMounted, toRefs } from 'vue'

  const props = defineProps({
    current_card_num: {
      type: Number,
      required: true,
    },
    invalidated: {
      type: Boolean,
      required: false,
    }
  })

  const { current_card_num } = toRefs ( props )

  const emit = defineEmits ([
    'submitted',
  ])

  const user_answer = ref ( '' )
  const has_user_answer = computed ( () => user_answer.value.trim ().length > 0 )

  const answer_el = ref ()
  const focus_answer_el = () => answer_el.value.focus ()
  onMounted ( focus_answer_el )
  watch ( current_card_num, () => {
    user_answer.value = ''
    focus_answer_el ()
  })

  const submit = () => {
    if ( !has_user_answer.value ) return
    emit ( 'submitted', user_answer.value )
  }
</script>

<template>
  <div class="user_answer">
    <textarea
      ref="answer_el"
      v-model="user_answer"
      placeholder="Type your answer here, just for your own reference..."
      :disabled="invalidated"
      >
    </textarea>
    <button
      :disabled="invalidated"
      @click.prevent="submit"
      >Submit
    </button>
  </div>

</template>

<style>
  .user_answer {
    display: flex;
    flex-direction: column;
    grid-row: 2;
    margin-top: var(--gap-m);
  }

  .user_answer textarea {
    min-width: 100%;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: var(--gap-m);
    border-top-left-radius: var(--gap-s);
    border-top-right-radius: var(--gap-s);
    background: #222;
    color: #ccc;
    border: 1px solid #444;
    outline-color: #555;
    resize: none;
    font-size: 1.5rem;
  }
  .user_answer textarea:focus,
  .user_answer textarea:focus-visible,
  .user_answer textarea:focus-within {
    border: none;
    outline: 1px solid #555;
  }
  .user_answer button {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: 1rem;
    font-weight: bold;
    color: black;
  }
  
  .user_answer button:hover {
    background: seagreen;
  }
  
  .user_answer button[disabled] {
    cursor: default;
  }
  .user_answer button:hover[disabled] {
    background: gray;
  }

 
  @media (min-width: 920px) {
    .user_answer {
      grid-column: 2;
      grid-row: 1;
      margin-top: 0;
    }
  }

  @media (min-width: 1100px) {
    .user_answer textarea {
      padding: var(--gap-xl);
    } 
  }
</style>