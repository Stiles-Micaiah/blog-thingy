<template>
  <div id="CreateForm">
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="query.title" placeholder="placeholder">
      <input type="text" v-model="query.author" placeholder="placeholder">
      <input type="text" v-model="query.img" placeholder="placeholder">
      <input type="date" v-model="query.date" placeholder="placeholder">
      <input type="text" v-model="query.body" placeholder="placeholder">
      <button class="btn btn-success rounded-pill btn-sm" type="submit">Post</button>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'CreateForm',
    data() {
      return {
        query: {}
      }
    },
    methods: {
      async handleSubmit() {
        try {
          this.error = "";
          let res = await api.post("", { query: this.query });
          this.results = res.data.posts;
        } catch (err) {
          this.error = "Invalid Search";
        }
      },
    }
  }
</script>


<style scoped>

</style>