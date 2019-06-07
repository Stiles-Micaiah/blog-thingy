<template>
    <div class="Post col-6">
      <div style="height: auto; margin: 15px;" class="card card-803 " v-for="post in posts" :key="post.id">
        <h3 class="card-header">{{post.title}}</h3>
        <h6>{{post.user}}</h6>
        <img style="height: auto; width: 100%; display: block;" :src="post.img" alt="Card image">
        <div class="card-body">
          <p class="card-text">{{post.body}}</p>
        </div>

        <div class="card-body">
          <button class="sketchy-btn sketchy-btn-info rounded-pill ">You like this</button>
          <button @click="deletePost(post._id)" class="btn btn-danger rounded-pill ">You like this, but in Red</button>
        </div>
        <div style="-webkit-text-fill-color: blueviolet;" class="card-footer text-muted">
          {{post.user}} but in Purple
        </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Post',
    data() {
      return {
      }
    },
    // methods: {
    //   addPost(item) {
    //     this.$store.dispatch('addPost', item)
    //   }
    // },
    mounted() {
      this.$store.dispatch("getPosts")
    },

    computed: {
      posts() {
        return this.$store.state.posts.data
      }
    },
    methods:{
      deletePost(data) {
        this.$store.dispatch('deletePost', data)
      }
    }
  }

</script>


<style scoped>
  .card-803 {
    max-width: 100%;
  }
  
</style>