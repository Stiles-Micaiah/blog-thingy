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

    },
  },
  actions: {
    async getPosts({ commit }) {
      let res = await api.get("")
      commit('setPosts', res.data)
    },

    async getPost({ commit }, id) {
      let res = await api.get(id)
      commit('setPost', res.data)
    },

    addPost({ commit, dispatch, state }, MJ) {
      let post = new Post(MJ)
      state.post.push(post)
      api.put(state.post.id, state.post)
        .then(res => {
          dispatch('getPost', state.post.id)
        })
        .catch(err => {
          state.post.pop()
        })
    }
  }
})
