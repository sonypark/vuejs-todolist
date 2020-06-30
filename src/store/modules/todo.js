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
      if (selected === 'active') {
        state.filterdTodos = state.todos.filter((todo) => !todo.checked);
      } else if (selected === 'completed') {
        state.filterdTodos = state.todos.filter((todo) => todo.checked);
      } else {
        state.filterdTodos = state.todos;
      }
    },
  },

  getters: {
    getAllTodos: (state) => {
      return state.todos;
    },
    getFilterdTodos: (state) => {
      return state.filterdTodos;
    },
    countTodos: (state) => {
      return state.filterdTodos.length;
    },
  },
};
