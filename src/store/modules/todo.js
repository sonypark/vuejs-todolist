export default {
  namespaced: true,

  state: {
    todos: [
      { id: 1, content: 'buy a car', checked: false },
      { id: 2, content: 'play a game', checked: false },
    ],
    filterdTodos: [
      { id: 1, content: 'buy a car', checked: false },
      { id: 2, content: 'play a game', checked: false },
    ],
    selected: 'all',
  },

  mutations: {
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        content: value,
        checked: false,
      });
      state.filterdTodos = state.todos;
    },
    TOGGLE_CHECKBOX(state, { id, checked }) {
      state.todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = checked;
        }
        return todo;
      });
      state.filterdTodos = state.todos;
    },
    DELETE_TODO(state, { id }) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
      state.filterdTodos = state.todos;
    },
    UPDATE_TODO(state, { id, content }) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.content = content;
        }
        return todo;
      });
      state.filterdTodos = state.todos;
    },
    FILTER_TODOS(state, { selected }) {
      state.selected = selected;
    },
  },

  getters: {
    getFilterdTodos: (state) => {
      if (state.selected === 'active') {
        return state.todos.filter((todo) => !todo.checked);
      } else if (state.selected === 'completed') {
        return state.todos.filter((todo) => todo.checked);
      } else {
        return state.todos;
      }
    },
    countTodos: (state) => {
      return state.filterdTodos.length;
    },
  },
};
