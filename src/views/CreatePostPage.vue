<template>
  <div id="CreatePostPage" class="container-fluid">
    <div class="row">
    <form @submit.prevent="addPost" class="col-6">
      <div style="height: 40vh; width: 20vw; margin: 15px;" class="card card-803 ">
          <h3 class="card-header"><input type="text" v-model="query.title" placeholder="Title"></h3>
          <h4><input type="text" v-model="query.img" placeholder="Image URL...I dont have a data server"></h4>
          <div class="card-body">
            <p class="card-text"><input type="text" v-model="query.body" placeholder="Body"></p>
          </div>
          <div class="card-body">
            <button type="submit" class="btn btn-success btn-sm rounded-pill ">Post!</button>
            <button type="reset" class="btn btn-warning btn-sm rounded-pill">Reset!</button>
            <router-link class="nav-link" to="/home"><button class="btn btn-primary btn-sm rounded-pill ">Cancel?</button></router-link>
          </div>
          <div style="-webkit-text-fill-color: blueviolet;" class="card-footer text-muted">
            [Your Name] but in Purple
          </div>
      </div>
    </form>
    </div>
   </div>
</template>


<script>
  export default {
    name: 'CreatePostPage',
    data() {
      return {
        query: {
          title: "",
          author: "",
          img: "",
          date: new Date().toLocaleTimeString(),
          body: ""
        }
      }
    },
    methods: {
      addPost(item) {
        this.$store.dispatch('addPost', this.query)
      }
    },
  }
</script>


<style scoped>

</style>