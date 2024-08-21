import { createStore } from 'vuex';
import axios from 'axios';

const apiURL = 'https://node-eomp-u5mv.onrender.com/'

export default createStore({
  state: {
    products:null,
    carousel:null,
    news:null

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
    }
  },
  actions: {
    async getData({commit}){
      try {
        let fetchedInfo = await axios.get('https://c0dingforfun.github.io/node-json/api/data.json')
        let {carousel,news} = fetchedInfo
        commit('setCarousel', carousel)  
        commit('setNews', news)  
      } 
      catch (error) {
        console.log(error);
      }
    },
    async getProducts ({commit}) {
      try {
        let {data} = await axios.get(`${apiURL}products`);
          commit('setProducts',data.results)
      }
      catch (error) {
        console.log(error);      
      }
    }
    
  },
  modules: {
  }
})
