<template>
  <li :class="todo.checked ? 'completed' : ''">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.checked ? 'checked' : ''"
        @click="toggleCheckbox"
      />
      <label class="label">{{todo.content}}</label>
      <button class="destroy" @click="deleteTodo"></button>
    </div>
    <input class="edit" value="todo.content" />
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleCheckbox(event) {
      this.$store.commit("todo/TOGGLE_CHECKBOX", {
        id: this.todo.id,
        checked: event.target.checked
      });
    },
    deleteTodo() {
      this.$store.commit("todo/DELETE_TODO", {
        id: this.todo.id
      });
    }
  }
};
</script>

<style>
</style>