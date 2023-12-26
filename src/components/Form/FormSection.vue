<script setup>

import { ref } from "vue";
import { v4 } from "uuid";

const props = defineProps({
  todo: Object,
});

const emit = defineEmits(['update:todo']);

let todo = ref({
  uuid: v4(),
  title: '',
  body: '',
});

const handlerClick = () => {
  console.log(todo)
  emit('update:todo', todo);
  console.log('emit-go')
  todo = {
    uuid: v4(),
    title: '',
    body: '',
  };
}
</script>

<template>
  <section class="form">
    <div class="container">
      <form
        class="form__block"
        @submit="handlerClick"
      >
        <p>{{ todo.title }}</p>
        <p>{{ todo.body }}</p>
        <input
          type="text"
          placeholder="Enter todo title"
          class="form__input"
          :value="todo.title"
          @input="todo.title = $event.target.value"
        >
        <input
          type="text"
          placeholder="Enter todo text"
          class="form__input"
          :value="todo.body"
          @input="todo.body = $event.target.value"
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