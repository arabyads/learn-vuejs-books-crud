<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Books</router-link>
    </div>
    <router-view
      :books="books"
      @delete-book="deleteBookListner"
      @add-new-book="addNewBookListner"
    />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  components: {},

  props: {},

  data() {
    return {
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
    };
  },

  methods: {
    deleteBookListner(id) {
      this.books = this.books.filter(function (book) {
        if (book.id != id) {
          return book;
        }
      });
    },

    addNewBookListner(book) {
      this.books.push({ id: uuidv4(), name: book.name, author: book.author });
      this.$router.push({name:"List"});
    },
  },
};
</script>
