<template>
  <ul class="filters">
    <li>
      <a
        class="all"
        :class="selected === 'all' ? 'selected' : ''"
        data-select="all"
        @click="selectStatus"
        href="#/"
      >전체보기</a>
    </li>
    <li>
      <a
        class="active"
        :class="selected === 'active' ?'selected' : ''"
        data-select="active"
        @click="selectStatus"
        href="#/active"
      >해야할 일</a>
    </li>
    <li>
      <a
        class="completed"
        :class="selected === 'completed' ? 'selected' : ''"
        data-select="completed"
        @click="selectStatus"
        href="#/completed"
      >완료한 일</a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      selected: ""
    };
  },

  methods: {
    selectStatus(event) {
      const status = event.target.dataset.select;
      this.$store.commit("todo/FILTER_TODOS", {
        selected: status
      });

      this.selected = status;
    }
  }
};
</script>

<style></style>
