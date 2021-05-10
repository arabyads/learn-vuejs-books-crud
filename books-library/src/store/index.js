import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [
      {
        id: uuidv4(),
        name: "Broken (in the best possible way)",
        author: "Jenny Lawson",
      },
      {
        id: uuidv4(),
        name: "The Good Sister",
        author: "Sally Hepworth",
      },
      {
        id: uuidv4(),
        name: "Of Women and Salt",
        author: "Gabriela Garcia",
      },
      {
        id: uuidv4(),
        name: "The Hill We Climb: An Inaugural Poem for the Country",
        author: "Amanda Gorman ",
      },
    ],
  },

  mutations: {
    SET_BOOKS: (state, newVal) => {
      state.books = newVal
    }
  },
  actions: {

    deleteBook(context, bookId) {
      let books = context.state.books.filter((book) => book.id != bookId)
      context.commit("SET_BOOKS", books)
    }
  },

  modules: {},
});
