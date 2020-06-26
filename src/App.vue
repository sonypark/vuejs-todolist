<template>
  <section class="todoapp">
    <TodoInput />
    <div class="main">
      <TodoList />
    </div>
    <div class="count-container">
      <TodoCount />
      <TodoFilter />
    </div>
  </section>
</template>

<script>
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import TodoCount from '@/components/TodoCount';
import TodoFilter from '@/components/TodoFilter';

export default {
  components: {
    TodoInput,
    TodoList,
    TodoCount,
    TodoFilter,
  },
};
</script>

<style></style>
