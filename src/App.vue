<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link class="navbar-brand" to="https://stiles-micaiah.github.io/">M&J</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="https://github.com/Stiles-Micaiah">GitHub Repos <span
                class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/jessiempaxton">Jessie's GitHub Repos!!</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/post">Create Post</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
        <form @submit.prevent="searchPosts" class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" v-model="query" type="text" placeholder="Search">
          <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        query: ""
      }
    },
    methods: {
      searchPosts() {
        router.push({ name: 'search', params: { keyword: this.query } })
        // this.$store.dispatch('searchByName', this.query
      }
    }

    // ,
    // props: {
    //   keyword /////////ANCHOR this was the issue!!!!
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #42b983;
  }
</style>
<style>
  #bg-image-whole-pg {
    background: none;
  }

  html {
    background-image: url('https://www.pixelstalk.net/wp-content/uploads/2014/12/Abstract-Flower-Art-Desktop-Background.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
  }
</style>