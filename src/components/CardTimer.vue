<!-- CardTimer -->

<script setup>
  import { ref, computed, toRefs, onMounted, onUnmounted } from 'vue'

  const props = defineProps({
    total_time: {
      type: Number,
      required: false,
      default: 60,
    },
  })

  const { total_time } = toRefs ( props )

  const emit = defineEmits ( ['time:up', 'time:paused' ] )

  const time = ref ( total_time.value )
  const colors = {
    safe: 'cadetblue',
    warn: 'goldenrod',
    alert: 'crimson',
    white: 'white',
    paused: 'gray',
  }
  const color = computed ( () => {
    if ( !running.value )
      return colors.paused
    if ( time.value > 20 )
      return colors.safe
    if ( time.value > 5 )
      return colors.warn
    return colors.alert
  })
  
  const time_pct = computed ( () => ( time.value / total_time.value ) * 100 )
  const gradient = computed ( () => `conic-gradient(${ color.value } 0% ${ time_pct.value }%, transparent ${ time_pct.value }% 100%)`)
  const time_color = computed ( () => time.value ? colors.white : colors.alert )

  let timer_interval = null
  const running = ref ( false )

  const start = () => {
    running.value = true
    timer_interval = setInterval ( tick, 1000)
  }

  const tick = () => {
    if ( time.value > 0 )
      time.value--
    else
      time_up ()
  }

  const time_up = () => {
    stop ()
    emit('time:up')
  }

  const reset = () => {
    stop ()
    time.value = total_time.value
    start ()
  }

  const stop = () => {
    running.value = false
    clearInterval ( timer_interval )
  }

  const pause = () => {
    if ( running.value )
      stop ()
    else
      start ()
    emit ( 'time:paused' )
  }

  onMounted ( () => {
    start ()
  })

  onUnmounted ( () => {
    stop ()
  })

  defineExpose ( { reset, stop, start } )

</script>

<template>
  <div
    class="timer"
    :class="[ time ? ( running ? 'running' : 'paused' ) : 'time_up' ]"
    :style="{
      backgroundImage: gradient,
      // backgroundColor: time ? 'transparent' : colors.alert,
      color: time_color,
    }">
    {{ time }}
  </div>
</template>

<style>
  .timer {
    color: white;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    background-color: transparent;
    border-radius: 100%;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .timer.paused {
    opacity: .7;
    box-shadow: inset 0 0 2rem gray;
  }

  .timer.time_up {
    /* border: 1px solid; */
    box-shadow: 0 0 2rem, inset 0 0 1.25rem;
  }
</style>