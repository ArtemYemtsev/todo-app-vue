<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})

const closePopup = () => {
  $emit('update:show', false)
}
</script>

<template>
  <div
    :class="[
      'popup',
      {active: show}
    ]"
    v-if="show"
    @click="closePopup"
  >
    <div class="popup__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>