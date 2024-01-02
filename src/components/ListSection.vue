<script setup>
import { ref } from "vue"

const props = defineProps({
  todos: {
    type: Array,
  },
});

const emit = defineEmits(['update:remove-todo', 'update:edit-form']);

const openForm = ref(false);

const editTodo = (id) => {
  props.todos.forEach( item => {
    if(item.uuid === id) {
      item.is_editing = !item.is_editing
    }
  })
} 

</script>

<template>
  <section class="todos">
    <div class="container">
      <ul
        v-if="todos.length > 0"
        class="todos__list"
      >
        <li
          v-for="todo in todos"
          :key="todo.uuid"
          class="todos__list__item"
        >
          <div
            v-if="todo.is_editing"
            class="todos__edit"
          >
            <h3>Edit:</h3>
            <input
              type="text"
              v-model="todo.title"
              class="todos__edit--input"
            >
            <textarea
              v-model="todo.body"
              class="todos__edit--textarea"
            ></textarea>
          </div>
          <div
            class="todos__body"
            v-else
          >
            <h3>{{ todo.title }}</h3>
            <p>{{ todo.body }}</p>
          </div>
          
          <div class="todos__date-time">
            <p>
              {{ `${todo.date?.date}.${todo.date?.month}.${todo.date?.year}` }}
            </p>
            <p>
              {{ `${todo.time?.hours}:${todo.time?.minutes}:${todo.time?.seconds}` }}
            </p>
          </div>
          <div class="todos__controls">
            <button
              type="button"
              :class="[
                'btn btn__controls',
                {'btn--progress': !todo.is_done},
                {'btn--done': todo.is_done}
              ]"
              v-text="todo.is_done ? `Done` : `In progress...`"
              @click="todo.is_done = !todo.is_done"
            >
            </button>
            <button
              type="button"
              class="btn btn__controls btn--edit"
              @click="editTodo(todo.uuid)"
              v-text="todo.is_editing ? `Editing...` : `Edit`"
            >
            </button>
            <button
              type="button"
              class="btn btn__controls btn--remove"
              @click="$emit('update:remove-todo', todo.uuid)"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
      <div v-else>
        <h3>No tasks right now!</h3>
      </div>
    </div>
  </section>
</template>