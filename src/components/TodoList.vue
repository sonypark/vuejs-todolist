<template>
  <ul id="todo-list" class="todo-list">
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import Todo from "@/components/Todo";

export default {
  components: {
    Todo
  },

  computed: {
    todos() {
      return this.$store.getters["todo/getAllTodos"];
    }
  }
};
</script>

<style></style>
