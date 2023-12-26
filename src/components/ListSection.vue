<script setup>

const props = defineProps({
  todos: Array,
});

</script>

<template>
  <section class="todos">
    <div class="container">
      <ul class="todos__list">
        <li
          v-for="todo in todos"
          :key="todo.uuid"
          class="todos__list__item"
        >
          <h3>{{ todo.title }}</h3>
          <p>{{ todo.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>