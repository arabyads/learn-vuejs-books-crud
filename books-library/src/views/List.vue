<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
<template>
  <div class="home">
    <router-link :to="{ name: 'Create' }">
      <button type="button" class="deletebtn"> Insert New Book </button>
    </router-link>
    <table>
      <tr>
        <th>Book</th>
        <th>Author</th>
        <th>Action</th>
      </tr>
      <tr v-for="book in books" :key="book.id">
        <td>
          {{ book.name }}
        </td>
        <td>{{ book.author }}</td>
        <td>
          <router-link :to="{ name: 'Show', params: { id: book.id } }">
            <button type="button" class="cancelbtn">Show</button>
          </router-link>
          <button @click="editBook(book.id)" type="button" class="cancelbtn">
            Edit
          </button>
          <button @click="deleteBook(book.id)" type="button" class="deletebtn">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["books"],
  methods: {
    deleteBook(id) {
      this.$emit("delete-book", id); // Question here can i pass alot of params here or just the id ? yes by comma or object
    },
  },
};
</script>
