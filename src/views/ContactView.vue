<template>
    <div id="contact">
        <div class="mx-auto" id="form">
            <form action="https://formspree.io/f/mwperylp" method="POST" role="form" class="mx-auto my-auto">
                <h1 class="text-center text-white"><b>Reach Us Here:</b></h1>
                      <div class="row text">
                        <div class="col-md-6 form-group">
                          <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" v-model="name">
                        </div>
                        <div class="col-md-6 form-group mt-3 mt-md-0">
                          <input type="text" name="surname" class="form-control" id="surname" placeholder="Your Surname" v-model="surname">
                        </div>
                      </div>
                      <div class="form-group mt-3">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" v-model="email">
                      </div>
                      <div class="form-group mt-3">
                        <textarea class="form-control" name="message" rows="5" placeholder="Message" v-model="message"></textarea>
                      </div>
                      <div class="text-center mt-4 send">
                        <button type="submit" @click="check()">Send Message</button> <br>
                      </div>
            </form>
        </div>
        
    </div>
</template>
<script>
import {toast} from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
export default {
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            message: '',
        }
    },
    methods:{
        check(){
            if((this.name == '') && (this.surname == '') && (this.email == '') && (this.message == '')){
                toast("Please fill in all the fields", {
                    "theme": "dark",
                    "type": "error",
                    "position": "top-center",
                    "dangerouslyHTMLString": true
                })
            }
            else{
                toast("Message sent successfully!", {
                    "theme": "dark",
                    "type": "success",
                    "position": "top-center",
                    "dangerouslyHTMLString": true
                })
            }
        }
    }
}
</script>
<style scoped>
    #contact{
        background-image: url('https://c0dingforfun.github.io/node-images/Images/Contact/laptop.jpg');
        background-position: center;
        background-size: cover;
        height:90vh;
        display:flex;
        align-items: center;
    }
    #form{
        padding:0.8em;
        display:flex;
        align-items:center ;
        width:50vw;
        height:70vh;
        border: double 2px black;
        backdrop-filter: blur(2px);
        border-radius:10%;
    }
    button {
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge #149CEA;
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

button::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 3%;
  width: 95%;
  height: 40%;
  /* background-color: #212121; */
  transition: 0.5s;
  transform-origin: center;
}

button::before {
  content: "";
  transform-origin: center;
  position: absolute;
  top: 80%;
  left: 3%;
  width: 95%;
  height: 40%;
  /* background-color: #212121; */
  transition: 0.5s;
}

button:hover::before, button:hover::after {
  transform: scale(0)
}

button:hover {
  box-shadow: inset 0px 0px 25px #1479EA;
}
</style>