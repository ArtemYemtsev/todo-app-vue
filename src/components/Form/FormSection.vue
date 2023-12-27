<script setup>
import { computed } from "vue";
import { v4 } from "uuid";

const props = defineProps({
  todo: Object,
});

const emit = defineEmits(['update:todos', 'update:todo']);

const inputTodo = computed({
  get() {
    return props.todo;
  },
  set(value) {
    emit('update:todo', value);
  }
})

const handlerClick = () => {
  inputTodo.value.uuid = v4();
  inputTodo.value.is_done = false;
  emit('update:todos', inputTodo);
  inputTodo.value = {
    uuid: v4(),
    title: '',
    body: '',
  };
};
</script>

<template>
  <section class="form">
    <div class="container">
      <form
        class="form__block"
        @submit.prevent="handlerClick"
      >
        <input
          type="text"
          placeholder="Enter todo title"
          class="form__input"
          v-model="inputTodo.title"
        >
        <input
          type="text"
          placeholder="Enter todo text"
          class="form__input"
          v-model="inputTodo.body"
        >
        <button
          type="button"
          class="btn btn--primary"
          @click="handlerClick"
        >
          Add
        </button>
      </form>
    </div>
  </section>
</template>