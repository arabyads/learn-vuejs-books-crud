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
    <table>
      <tr>
        <th>Book</th>
        <th>Author</th>
      </tr>
      <tr v-for="book in books" :key="book.id">
        <td>{{ book.name }}</td>
        <td>{{ book.author }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          id: 1,
          name: "Broken (in the best possible way)",
          author: "Jenny Lawson",
        },
        {
          id: 1,
          name: "The Good Sister",
          author: "Sally Hepworth",
        },
        {
          id: 1,
          name: "Of Women and Salt",
          author: "Gabriela Garcia",
        },
      ],
    };
  },
};
</script>
