<template>
  <div class="viewBook">
   The book is : {{getBookById(this.$route.params.id).name}} <br>
   The authos is : {{getBookById(this.$route.params.id).author}} 
  </div>
</template>

<script>
export default{
  data() {
    return {
      books: [
        {
          id: 1,
          name: "Broken (in the best possible way)",
          author: "Jenny Lawson",
        },
        {
          id: 2,
          name: "The Good Sister",
          author: "Sally Hepworth",
        },
        {
          id: 3,
          name: "Of Women and Salt",
          author: "Gabriela Garcia",
        },
        {
          id: 4,
          name: "The Hill We Climb: An Inaugural Poem for the Country",
          author: "Amanda Gorman ",
        },
      ],
    };
  },
  methods:{
    getBookById(id){
      return this.books.find(function(book){
        if(book.id == id){
          return book;
        }
      })
    }
  }
}
</script>
