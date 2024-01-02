import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useTodosStore = defineStore('todosStore', () => {
  
  const todos = ref([]);

  const todosInLocalStorage = localStorage.getItem("todos");
  if (todosInLocalStorage) {
    todos.value = JSON.parse(todosInLocalStorage)._value;
  }

  const totalCountTodos = computed(() => {
    return todos.value.length;
  });

  const addTodo = (todo) => {
    todos.value.push(todo);
  };

  const removeTodo = (id) => {
    todos.value = todos.value.filter(item => item.uuid !== id);
  };

  const editTodo = (todo) => {
    todos.value.map(item => {
      item.uuid === todo.uuid ? item = todo : false;
    })
  }

  watch(() => todos, (state) => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, {deep: true});

  return {
    todos, 
    totalCountTodos,
    addTodo,
    removeTodo,
    editTodo
  }
})