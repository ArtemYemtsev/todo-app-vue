<script setup>
import HeaderSection from "./components/HeaderSection.vue";
import FormSection from "./components/Form/FormSection.vue";
import ListSection from "./components/ListSection.vue";
import { v4 } from "uuid";
import { ref } from "vue";


const todos = ref([
  {
    uuid: '01',
    title: 'Title1',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sed.',
  },
  {
    uuid: '02',
    title: 'Title2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, aliquam.',
  },
  // {
  //   uuid: '03',
  //   title: 'Title3',
  //   body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, pariatur?',
  // },
  // {
  //   uuid: '04',
  //   title: 'Title4',
  //   body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, pariatur?',
  // },
]);

const todo = ref({})
// const todo = ref({
//   uuid: '',
//   title: '',
//   body: '',
// })

const addTodo = (todo) => {
  console.log('click')
  // todo.uuid = v4();
  todos.value.push(todo);
  console.log(todo);
  // todo = {uuid: '', title: '', body: '',}
  // console.log(todo);
}

</script>

<template>
  <div class="main">
    <HeaderSection :title="'My Vue Todo App'"></HeaderSection>
    <FormSection
      @update:todo="addTodo"
      v-model:todo="todo"
    />
    <!-- <pre>{{ todo.title }}</pre>
    <pre>{{ todo.body }}</pre> -->
    <ListSection :todos="todos" />
  </div>
</template>

<style scoped>
/* css */
</style>
