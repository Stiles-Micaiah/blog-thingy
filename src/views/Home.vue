<template>
  <div class="home container-fluid">
    <div class="row d-flex justify-content-center">
      <!-- <h1 v-if="!posts">Nothing to show from your search, 
         Maybe try something else?</h1> -->
      <Post />
    </div>
  </div>
</template>


<script>
  import Post from '@/components/Post.vue'
  import CreateForm from '@/components/CreateForm.vue'

  export default {
    name: 'Home',
    data() {
      return {

      }
    },
    components: {
      Post,
      CreateForm
    },
    computed: {
      posts() {
        this.$store.state.posts.data
      }
    },
  };
</script>


<style scoped>

</style>