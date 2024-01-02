<script setup>
import HeaderSection from "./components/HeaderSection.vue";
import FormSection from "./components/Form/FormSection.vue";
// import EditFormSection from "./components/Form/EditFormSection.vue";
import PopupBlock from "./components/Popup/PopupBlock.vue";
import ListSection from "./components/ListSection.vue";
import DateTimeSection from "./components/DateTimeSection.vue";
import { useTodosStore } from "./store/TodosStore.js";
import { ref } from "vue";

const todosStore = useTodosStore()

const todo = ref({});
const openForm = ref(false);
const openEditForm = ref(false);

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

const isOpenEditForm = (item) => {
  todo.value = item;
  openEditForm.value = true;
};
</script>

<template>
  <div class="main">
    <HeaderSection
      :title="'My Vue Todo App'"
      @update:is-open-form="isOpenForm"
    />
    <DateTimeSection />
    <ListSection
      :todos="todosStore.todos"
      v-model="todo"
      @update:remove-todo="removeTodo"
    />
    <PopupBlock v-model:show="openForm">
      <FormSection
          @update:todos="addTodo(todo)"
          @update:todo="(newValue) => (todo = newValue)"
          v-model:todo="todo"
        />
    </PopupBlock>
  </div>
</template>

<style scoped>
/* css */
</style>
