<template>
  <span class="todo-count">
    총
    <strong>{{countTodos}}</strong> 개
  </span>
</template>

<script>
export default {
  computed: {
    countTodos() {
      return this.$store.getters["todo/countTodos"];
    }
  }
};
</script>

<style></style>
