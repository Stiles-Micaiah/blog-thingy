import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Post from '@/model/Post'



var api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/MJ/blog'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    post: {}
  },
  mutations: {
    setPosts(state, posts = []) {
      state.posts = posts
    }
    
  },
  actions: {
    async getPosts({ commit }) {
      let res = await api.get("")
      commit('setPosts', res.data)
      console.log(res)
    },

    async getPost({ commit }, id) {
      let res = await api.get(id)
      commit('setPosts', res.data)
    },

    addPost({ commit, dispatch}, data ) {
      // let post = new Post(MJ)
      // state.post.push(post)
      api.post('', data)
        .then(res => {
          dispatch('getPosts')
        
        })
        .catch(err => {
          console.error(err)
        })
    },
    deletePost({ commit, dispatch}, data ) {
      // let post = new Post(MJ)
      // state.post.push(post)
      api.delete(data)
        .then(res => {
          dispatch('getPosts')
        
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
})
//state.post.id, ''