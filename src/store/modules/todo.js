export default {
  state: {
    todos: [
      { id: 1, text: 'buy a car', checked: false },
      { id: 2, text: 'play a game', checked: false },
    ],
  },

  mutations: {
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        content: value,
        checked: false,
      });
    },
  },
};
