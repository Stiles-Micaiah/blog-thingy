<template>
  <div id="CreateForm">
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
      <div class="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" class="btn btn-md btn-primary dropdown-toggle" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Create Post</button>
        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <form @submit.prevent="addPost">
            <input class="dropdown-item" type="text" v-model="query.title" placeholder="title">
            <input class="dropdown-item" type="text" v-model="query.author" placeholder="Author">
            <input class="dropdown-item" type="text" v-model="query.img" placeholder="Image URL">
            <input class="dropdown-item" type="date" v-model="query.date" placeholder="What is today?">
            <input class="dropdown-item" type="text" v-model="query.body" placeholder="What's on your mind?">
            <button style="width: 100%;" class="btn btn-success btn-md" type="submit">Post</button>
          </form>
        </div>
      </div>
    </div>
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
      methods: {
        addPost(item) {
          this.$store.dispatch('addPost', this.query)
        }
      },
      // handleSubmit() {
      //     try {
      //       this.error = "";
      //       let res = await api.post("", { query: this.query });
      //       this.results = res.data.posts;
      //     } catch (err) {
      //       this.error = "Invalid Search";
      //     }

      //   },
    }
  }
</script>


<style scoped>

</style>