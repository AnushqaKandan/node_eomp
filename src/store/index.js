import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";

const apiURL = 'https://node-eomp-u5mv.onrender.com/'

export default createStore({
  state: {
    products:null,
    carousel:null,
    news:null,
    users:null
  },
  getters: {
  },
  mutations: {
    setProducts(state,payload){
      state.products = payload;
    },
    setCarousel(state,payload){
      state.carousel = payload;
    },
    setNews(state,payload){
      state.news = payload;
    },
    setUsers(state, payload){
      state.users = payload;
    }
  },
  actions: {
    async getData({commit}){
      try {
        let {data} = await axios.get('https://c0dingforfun.github.io/node-json/api/data.json')
        console.log(data);
        let {carousel,news} = data
        commit('setCarousel', carousel)  
        commit('setNews', news)   
      } 
      catch (error) {
        toast("There has been an error", {
          "theme": "dark",
          "type": "error",
          "dangerouslyHTMLString": true
        })
      }
    },
    async getProducts ({commit}) {
      try {
        let {data} = await axios.get(`${apiURL}products`);
          commit('setProducts',data.results)
      }
      catch (error) {
        toast("There has been an error", {
          "theme": "dark",
          "type": "error",
          "dangerouslyHTMLString": true
        })      
      }
    },
    async getProducts ({commit}) {
      try {
        let {data} = await axios.get(`${apiURL}products`);
          commit('setProducts',data.results)
      }
      catch (error) {
        toast("There has been an error", {
          "theme": "dark",
          "type": "error",
          "dangerouslyHTMLString": true
        })      
      }
    }
    
  },
  modules: {
  }
})
