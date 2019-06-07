<template>
  <div class="Post col-6" v-if="posts">
    <div style="height: auto; margin: 25px;" class="card card-803 " v-for="post in posts" :key="post.id">
      <h3 class="title-color card-header">{{post.title}}</h3>
      <h6 class="mix-a-lot">Post By:{{post.user}}</h6>
      <img style="height: auto; width: 100%; display: block;" :src="post.img" alt="Card image">
      <div class="card-body">
        <p class=" body-color card-text">{{post.body}}</p>
      </div>

      <div class="card-body">
        <button class="btn btn-info rounded-pill ">You like this</button>
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
    methods: {
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

  .card,
  .card>* {
    background-color: rgba(85, 1, 163, 0.226);
  }

  .mix-a-lot {
    -webkit-text-fill-color: deepskyblue;
  }

  .title-color {
    -webkit-text-fill-color: cyan;
  }

  .body-color {
    -webkit-text-fill-color: turquoise;
  }
</style>