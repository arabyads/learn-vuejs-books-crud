<h3>Using CSS to style an HTML Form</h3>
<template>
  <div style="width: 50%">
    <label for="bookName">Book Name</label>
    <input
      type="text"
      id="bookName"
      name="bookName"
      placeholder="book name"
      v-model="newBook.name"
    />

    <label for="bookAuthor">Author</label>
    <input
      type="text"
      id="bookAuthor"
      name="bookAuthor"
      placeholder="The book author"
      v-model="newBook.author"
    />

    <input @click="addNewBook" type="button" value="Create new book" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      newBook: {
          name:"",
          author:""
      },
    };
  },

  methods: {
    addNewBook() {
      this.$emit("add-new-book", this.newBook);
    },
  },
};
</script>

<style>
input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="button"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="button"]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
