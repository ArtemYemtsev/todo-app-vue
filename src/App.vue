<script setup>
import HeaderSection from "./components/HeaderSection.vue";
import FormSection from "./components/Form/FormSection.vue";
import ListSection from "./components/ListSection.vue";
import { ref } from "vue";

const todos = ref([
  {
    uuid: '01',
    title: 'Title1',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sed.',
  },
  {
    uuid: '02',
    title: 'Title2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, aliquam.',
  },
]);

const todo = ref({})

const addTodo = (todo) => { todos.value.push(todo); };
</script>

<template>
  <div class="main">
    <HeaderSection :title="'My Vue Todo App'"></HeaderSection>
    <FormSection
      @update:todos="addTodo(todo)"
      @update:todo="(newValue) => (todo = newValue)"
      v-model:todo="todo"
    />
    <ListSection :todos="todos" />
  </div>
</template>

<style scoped>
/* css */
</style>
