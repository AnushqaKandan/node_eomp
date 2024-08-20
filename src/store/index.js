import { createStore } from 'vuex';
import {axios} from 'axios';

export default createStore({
  state: {
    products:null
  },
  getters: {
  },
  mutations: {
    setProducts(state,payload){
      state.products = payload;
    }
  },
  actions: {
    async getProducts ({commit}) {
      try {
        let {results} = await axios.get('https://node-eomp-u5mv.onrender.com/products');
        console.log(results);
        commit('setProducts',results)
      }
      catch (error) {
          console.log(error);      
      }
    }
    
  },
  modules: {
  }
})
