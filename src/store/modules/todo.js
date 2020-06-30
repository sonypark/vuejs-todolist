export default {
  namespaced: true,

  state: {
    todos: [
      { id: 1, content: 'buy a car', checked: false },
      { id: 2, content: 'play a game', checked: false },
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
    TOGGLE_CHECKBOX(state, { id, checked }) {
      state.todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = checked;
        }
        return todo;
      });
    },
  },

  getters: {
    getAllTodos: (state) => {
      return state.todos;
    },
  },
};
