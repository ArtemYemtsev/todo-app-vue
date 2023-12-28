import { defineStore } from "pinia";

export const useTodosStore = defineStore('todosStore', {
  state: () => ({
    todos: [
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
    ],
  })
})