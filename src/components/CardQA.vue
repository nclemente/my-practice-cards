<!-- CardQA -->

<script setup>

  const props = defineProps ({
    question: {
      type: Object,
      required: true,
      validation: value => 
        value.question?.length
        && value.answer?.length,
    },
  })
</script>

<template>

  <!-- <Transition name="flip_card"> -->
    <div class="card_question">
      The Question
      <div class="question_text"
        v-html="question.question">
      </div>
    </div>
    <div v-if="show_answer" class="card_answer">
      The Answer
      <div class="answer_text"
        v-html="question.answer">
      </div>
    </div>
  <!-- </Transition> -->
  
</template>