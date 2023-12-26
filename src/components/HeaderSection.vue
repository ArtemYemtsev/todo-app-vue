<script setup>

const props = defineProps({
  title: String,
});

</script>
<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title">{{ title }}</h1>
    </div>
  </header>
</template>