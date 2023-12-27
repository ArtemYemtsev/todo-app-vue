<script setup>

const props = defineProps({
  title: String,
});

const emit = defineEmits(['update:is-open-form'])
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <h1 class="header__title">{{ title }}</h1>
        <button
          type="button"
          class="btn btn--primary btn--border"
          @click="$emit('update:is-open-form', true)"
        >
          ADD NEW TASK
        </button>
      </div>
    </div>
  </header>
</template>