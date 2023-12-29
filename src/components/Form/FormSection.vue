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

function checkForm() {
  const required = inputTodo.value.title && inputTodo.value.body;
  return (required !== '' && required.trim('')) ? true : false;
}

const handlerClick = () => {
  if(checkForm()) {
    inputTodo.value.uuid = v4();
    inputTodo.value.is_done = false;
    emit('update:todos', inputTodo);
    inputTodo.value = {
      uuid: v4(),
      title: '',
      body: '',
    };
  }
};
</script>

<template>
  <section class="form">
    <div class="container">
      <form
        class="form__block"
        @submit.prevent.stop="handlerClick"
      >
        <input
          type="text"
          placeholder="Enter todo title"
          :class="[
            'form__input',
            {error: false}
          ]"
          v-model="inputTodo.title"
        />
        <textarea
          placeholder="Enter todo text"
          :class="[
            'form__input form__input--textarea',
            {error: false}
          ]"
          v-model="inputTodo.body"
        ></textarea>
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