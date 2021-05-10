<template>
  <div class="viewBook">
    The book is : {{ getBookById(this.$route.params.id).name }} <br />
    The authos is : {{ getBookById(this.$route.params.id).author }}
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  data() {
    return {};
  },

  methods: {
    getBookById(id) {
      return this.books.find(function (book) {
        if (book.id == id) {
          return book;
        }
      });
    },
  },
};
</script>
