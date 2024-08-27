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
    users:null,
    user:null,
    product:null
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
    },
    setUser(state, payload){
      state.user = payload;
    },
    setProduct(state, payload){
      state.product = payload;
    }
  },
  actions: {
    async getData({commit}){
      try {
        let {data} = await axios.get('https://c0dingforfun.github.io/node-json/api/data.json')
        // console.log(data);
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
    async getProduct ({commit},id) {
      try {
        let {data} = await axios.get(`${apiURL}products/${id}`);        
        commit('setProduct',data.result)
      }
      catch (error) {
        toast("There has been an error", {
          "theme": "dark",
          "type": "error",
          "dangerouslyHTMLString": true
        })
      }
    },
    async getUsers({ commit }) {
      try {
        let { result } = await (await axios.get(`${apiURL}users`)).data;
        commit('setUsers', result);
      } catch (error) {
        toast?.error(`Failed to fetch users: ${error.message}`, { autoClose: 2000 });
      }
    },
    async getUser({ commit }, userId) {
      try {
        let { data } = await axios.get(`${apiURL}users/${userId}`);
        commit('setUser', data.results);
      } catch (error) {
        toast?.error(`Failed to fetch user: ${error.message}`, { autoClose: 2000 });
      }
    },
    async register(context, payload) {
      try {
        const {msg} = await (await axios.post(`${apiURL}users/register`, payload)).data
        if (msg) {
          context.dispatch('getUsers')
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      }
      catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async updateUser(context, payload) {
      console.log(payload.data);
      try {
        const { msg, err } = await (await axios.patch(`${apiURL}users/${payload.id}`, payload.data)).data
        if (msg) {
          context.dispatch('getUsers')
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast?.error(`${e.msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async deleteUser(context, id) {
      try {
        const { msg } = await (await axios.delete(`${apiURL}users/${id}`)).data
        if (msg) {
          context.dispatch('getUsers')
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast?.error(`Unable to delete a user`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async addProduct(context, payload) {
      try {
        const {msg} = await (await axios.post(`${apiURL}products/add`, payload)).data
        if (msg) {
          context.dispatch('getProducts')
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      }
      catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async updateProduct(context, payload) {
      try{
        console.log(payload);
        let {msg, err}= await (await axios.patch(`${apiURL}products/${payload.prodID}`, payload)).data
        if(msg) {
          context.dispatch('getProducts')
          toast?.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }else {
          toast?.error(err, {
                  autoClose: 2000,
                  position: toast.POSITION.BOTTOM_CENTER
                })
              }
        }catch(e){
          toast?.error(e.message, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
        },
    async deleteProduct(context, id) {
      try {
        const { msg } = await (await axios.delete(`${apiURL}products/${id}`)).data
        if (msg) {
          context.dispatch('getProducts')
          toast?.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast?.error(`Unable to delete a product`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    }
  },
  modules: {
  }
})
