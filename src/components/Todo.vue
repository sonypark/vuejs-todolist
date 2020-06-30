<template>
  <li :class="[{checked : todo.checked}, {editing : isEditing}]">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.checked ? 'checked' : ''"
        @click="toggleCheckbox"
      />
      <label class="label" @dblclick="onEditMode">{{todo.content}}</label>
      <button class="destroy" @click="deleteTodo"></button>
    </div>
    <input class="edit" :value="todo.content" @keyup.enter="updateTodo" @keyup.esc="offEditMode" />
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

  data() {
    return {
      isEditing: false
    };
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
    },
    onEditMode() {
      this.isEditing = true;
    },
    offEditMode() {
      this.isEditing = false;
    },
    updateTodo(event) {
      this.$store.commit("todo/UPDATE_TODO", {
        id: this.todo.id,
        content: event.target.value
      });
      this.offEditMode();
    }
  }
};
</script>

<style>
</style>