<template>
  <div class="home">
    <h1>MJ Blog</h1>
    <Post />

    <div class="d-flex">
      <div class="dropdown mr-1">
        <CreateForm />
      </div>
    </div>
  </div>
</template>


<script>
  import Post from '@/components/Post.vue'
  import CreateForm from '@/components/CreateForm.vue'

  export default {
    name: 'Home',
    components: {
      Post,
      CreateForm
    }
  };
</script>


<style scoped>

</style>