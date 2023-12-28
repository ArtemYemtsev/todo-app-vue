<script setup>
import HeaderSection from "./components/HeaderSection.vue";
import FormSection from "./components/Form/FormSection.vue";
import ListSection from "./components/ListSection.vue";
import { useTodosStore } from "./store/TodosStore.js";
import { ref } from "vue";

const todosStore = useTodosStore()

const todo = ref({});
const openForm = ref(false);

const addTodo = (todo) => {
  todosStore.addTodo(todo);
  isOpenForm(false);
};

const removeTodo = (id) => {
  todosStore.removeTodo(id);
};

const isOpenForm = (isOpen) => {
  openForm.value = isOpen;
};
</script>

<template>
  <div class="main">
    <HeaderSection
      :title="'My Vue Todo App'"
      @update:is-open-form="isOpenForm"
    />
    <ListSection
      :todos="todosStore.todos"
      @update:remove-todo="removeTodo"
    />
    <div
      :class="[
        'popup',
        {active: openForm}
      ]"
      @click.stop="isOpenForm(false)"
    >
      <div class="popup__content" @click.stop>
        <FormSection
          @update:todos="addTodo(todo)"
          @update:todo="(newValue) => (todo = newValue)"
          v-model:todo="todo"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* css */
</style>
