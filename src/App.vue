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
    is_done: false,
  },
  {
    uuid: '02',
    title: 'Title2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, aliquam.',
    is_done: false,
  },
]);
const todo = ref({});
const openForm = ref(false);

const addTodo = (todo) => {
  todos.value.push(todo);
  isOpenForm(false);
};

const removeTodo = (id) => {
  todos.value = todos.value.filter(item => item.uuid !== id);
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
      v-model:todos="todos"
      @update:todos-remove="removeTodo"
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
