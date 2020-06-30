<template>
  <li>
    <div class="view">
      <input class="toggle" type="checkbox" />
      <label class="label">{{todo.content}}</label>
      <button class="destroy"></button>
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
  }
};
</script>

<style>
</style>