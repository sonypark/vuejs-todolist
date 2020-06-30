<template>
  <div>
    <h1>TODOS</h1>
    <input
      id="new-todo-title"
      class="new-todo"
      placeholder="할일을 추가해주세요"
      v-model="todoText"
      @keyup.enter="addTodo"
      autofocus
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: ""
    };
  },

  methods: {
    addTodo(event) {
      this.$store.commit("todo/ADD_TODO", event.target.value);
      this.todoText = "";
    }
  }
};
</script>

<style></style>
