<template>
  <div class="home container-fluid">
    <h1>MJ Blog</h1>
    <div class="row">
      <div class="col">
        <CreateForm />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <Post />
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