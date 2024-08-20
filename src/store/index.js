import { createStore } from 'vuex';
import {axios} from 'axios';

export default createStore({
  state: {
    products:null
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async getProducts ({commit}) {
      let [data] = axios.get('https://node-eomp-u5mv.onrender.com/products');
      console.log(data);
      
    }
  },
  modules: {
  }
})
