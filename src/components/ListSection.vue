<script setup>
import { useTodosStore } from "@/store/TodosStore.js";

const todosStore = useTodosStore()

const removeTodo = (id) => {
  todosStore.removeTodo(id);
};
</script>

<template>
  <section class="todos">
    <div class="container">
      <p>Todos count: {{ todosStore.totalCountTodos }}</p>
      <ul
        v-if="todosStore.todos.length > 0"
        class="todos__list"
      >
        <li
          v-for="todo in todosStore.todos"
          :key="todo.uuid"
          class="todos__list__item"
        >
          <div class="todos__body">
            <h3>{{ todo.title }}</h3>
            <p>{{ todo.body }}</p>
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
              class="btn btn__controls btn--remove"
              @click="removeTodo(todo.uuid)"
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